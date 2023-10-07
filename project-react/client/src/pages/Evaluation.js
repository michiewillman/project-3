const symptomSeverityScale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mentalStateScale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Symptoms automatically loaded into user choices
const defaultSymptoms = [
  {
    symptom: "Shortness of breath",
    severity: symptomSeverityScale,
  },
  {
    symptom: "Difficulty swallowing",
    severity: symptomSeverityScale,
  },
  {
    symptom: "Difficulty chewing",
    severity: symptomSeverityScale,
  },
  {
    symptom: "Impaired speech",
    severity: symptomSeverityScale,
  },
  {
    symptom: "Facial expressions",
    severity: symptomSeverityScale,
  },
  {
    symptom: "Droopy eyelid(s)",
    severity: symptomSeverityScale,
  },
  {
    symptom: "Blurred/Double vision",
    severity: symptomSeverityScale,
  },
  {
    symptom: "Muscle weakness",
    severity: symptomSeverityScale,
  },
  {
    symptom: "General fatigue",
    severity: symptomSeverityScale,
  },
  // Show additional input for custom symptom that gets added to that patient's availableSymptoms array
  {
    symptom: "Other",
    severity: symptomSeverityScale,
  },
  {
    symptom: "None",
  },
];

// DANGER alert with difficuly swallowing, chewing or shortness of breath responses

// GIVE Encouragement with depressed response

// ALERT with suicidal thoughts response

// for each symptom in the defaultSymptoms, render a title with the name of the symptom, and a scale below it allowing the user to input their answers

// event listener on all scale input divs
// if user chooses anything other than 0, it gets logged with the current date, as a SymptomLog
// set symptomName as event target's symptom string
// set severity as even target's input value

// button for add symptom
// handle add symptom () --> pushes new symptom to the User.symptoms array, as well adds a SymptomLog
