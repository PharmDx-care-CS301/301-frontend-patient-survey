import React from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import * as widgets from "surveyjs-widgets";
import "jquery-ui/ui/widgets/datepicker.js";
import $ from "jquery";
import "jquery-ui/themes/base/all.css";
import {createSurvey, updateSurvey} from '../../graphql/mutations';
import { useSnackbar } from "notistack";
import { API } from "aws-amplify";
import * as qs from "query-string";

function SurveyPage(props) {

  // const { enqueueSnackbar } = useSnackbar();
  //
  // const displayError = (message) => {
  //   enqueueSnackbar(<p>{message}</p>, {
  //     variant: "error",
  //   });
  // };

  const parsed = qs.parse(window.location.search);

  const onComplete = async (result) => {
    // const surveyDataInputs = {
    //   "Added Symptoms": result.data["Added Symptoms"],
    //   "Symptoms": result.data["Symptoms"],
    //   "Schedule Date": result.data["Schedule Date"],
    //   "Schedule Time": result.data["Schedule Time"],
    //   "Added comments": result.data["Added comments"]
    // }
    // console.log(surveyDataInputs)
    // console.log(JSON.stringify(surveyDataInputs))

    const surveyData = {
      survey_data: JSON.stringify(result.data),
      id: props['id'],
      status: 'COMPLETED'
    };
    try {
      const ret = await API.graphql({
        query: updateSurvey,
        variables: {input: surveyData},
      });
      console.log(ret)
    } catch (e) {
      console.log("error:", e)
      if (e.errors != undefined) {
        // displayError(e.errors[0].message);
      }
    } finally {
    }
  }


  widgets.jqueryuidatepicker(Survey, $);

  var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];

  defaultThemeColors["$main-color"] = "#2d9cdb";
  defaultThemeColors["$main-hover-color"] = "#9b51e0";

  Survey
    .StylesManager
    .applyTheme();

  let json = {
    "title": "PharmDx Patient survey",
    "logo": "https://i.imgur.com/dhN1nfW.png",
    "logoPosition": "top",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "checkbox",
            "name": "Symptoms",
            "title": "Please select any symptoms or side effects you are experiencing",
            "colCount": 4,
            "choices": [
              {
                "value": "Dizziness",
                "text": "Dizziness"
              },
              {
                "value": "Drowsiness",
                "text": "Drowsiness"
              },
              {
                "value": "Fatigue",
                "text": "Fatigue"
              },
              {
                "value": "Nausea and vomiting",
                "text": "Nausea and vomiting"
              },
              {
                "value": "Rash",
                "text": "Rash"
              }
            ]
          },
          {
            "type": "text",
            "name": "Added Symptoms",
            "title": "Are you experiencing any other side effects or symptoms not listed above? If so, please describe them below"
          },
          {
            "type": "datepicker",
            "name": "Schedule Date",
            "title": "If you have any questions or concerns and would like to manually schedule a follow up appointment: ",
            "inputType": "date",
            "dateFormat": "mm/dd/yy",
            "maxDate": "14",
            "minDate": "0"
          },
          {
            "type": "dropdown",
            "name": "Schedule Time",
            "title": "What time of day would you like to schedule your appointment for?",
            "choices": [
              {
                "value": "Morning(8am-12pm)",
                "text": "Morning(8am-12pm)"
              },
              {
                "value": "Afternoon(1pm-5pm)",
                "text": "Afternoon(1pm-5pm)"
              },
              {
                "value": "Evening(6pm-8pm)",
                "text": "Evening(6pm-8pm)"
              }
            ]
          },
          {
            "type": "text",
            "name": "Added comments",
            "title": "Do you have any questions or concerns for your pharmasist or feedback to give about your experience? If so, please describe them below"
          }
        ]
      }
    ]
  };

  var surveyRender = <Survey.Survey onComplete={onComplete} json={json}/>;
  return (
    <div className="App">
      {props.id}
      {surveyRender}
    </div>
  )
}

export default SurveyPage;
