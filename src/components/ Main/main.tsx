import {API} from "aws-amplify";
import {getSurvey} from "../../graphql/queries";
import * as qs from "query-string";
import {useEffect, useState} from "react";
import SurveyPage from "../Survey/survey";
import LoginPage from "../Login/login";

function MainPage() {
    const [surveyData, setSurveyData] = useState<any>(undefined);
    const [dobCheckPass, setDOBCheckPass] = useState<boolean>(false);
    const [gotSurvey, setGotSurvey] = useState<boolean>(false);


    const querySurvey = async (id) => {
        try {
            let ret = await API.graphql({
                query: getSurvey,
                variables: {id: id},
            });
            console.log(ret)
            return ret['data']['getSurvey']
        } catch (e) {
            if (e.errors !== undefined) {
                // displayError(e.errors[0].message);
                console.error(e.errors[0].message)
            }
            else {
                console.error(e)
            }
        } finally {
        }
    };
    useEffect(() => {
        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
        const parsed = qs.parse(window.location.search);
        let secIsMounted = true;
        console.log(parsed);
        if (!surveyData) {
            querySurvey(parsed['id']).then(data => {
                if (secIsMounted) {
                    setSurveyData(data);

                    setGotSurvey(true);
                }
            });

        }
        return function cleanup() {
            secIsMounted = false
        };

    }, []);

    const pageContent = () => {
        if (surveyData === undefined || !gotSurvey){
            return <div> loading... </div>
        }
        else {
            if (surveyData['status'] === 'COMPLETED') {
                return <div> Survey already submitted </div>
            }
            else if (dobCheckPass) {
                return <SurveyPage id={surveyData['id']}/>
            }
            else {
                return <LoginPage checker={setDOBCheckPass} dob={surveyData['dob']}/>
            }
        }
    }

    return <div>{gotSurvey ? pageContent() : <div> loading... </div>} </div>
}

export default MainPage;
