import React from 'react';
import * as Survey from "survey-react";
import ReactDOM from "react-dom";
import './App.css';
import "survey-react/survey.css";
import * as widgets from "surveyjs-widgets";
import "jquery-ui/ui/widgets/datepicker.js";
import $ from "jquery";
import "jquery-ui/themes/base/all.css";

function App() {
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
          "value": "item1",
          "text": "Dizziness"
         },
         {
          "value": "item2",
          "text": "Drowsiness"
         },
         {
          "value": "item3",
          "text": "Fatigue"
         },
         {
          "value": "item4",
          "text": "Nausea and vomiting"
         },
         {
          "value": "item5",
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
          "value": "item1",
          "text": "Morning(8am-12pm)"
         },
         {
          "value": "item2",
          "text": "Afternoon(1pm-5pm)"
         },
         {
          "value": "item3",
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

   var surveyRender = <Survey.Survey json={json} />;
   return (
    <div className="App">
      {surveyRender}
    </div>
   )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

