const symptomLevel = ["None", "Slight", "Fair", "Bad", "Extreme"];

const symptomList = [
  {
    symptom: "Shortness of breath",
    severity: symptomLevel,
  },
  {
    symptom: "Difficulty swallowing",
    severity: symptomLevel,
  },
  {
    symptom: "Difficulty chewing",
    severity: symptomLevel,
  },
  {
    symptom: "Impaired speech",
    severity: symptomLevel,
  },
  {
    symptom: "Facial expressions",
    severity: symptomLevel,
  },
  {
    symptom: "Droopy eyelid(s)",
    severity: symptomLevel,
  },
  {
    symptom: "Blurred/Double vision",
    severity: symptomLevel,
  },
  {
    symptom: "Muscle weakness",
    type: ["arms", "hands/fingers", "legs", "neck", "other"],
    severity: symptomLevel,
  },
  {
    symptom: "General fatigue",
    severity: symptomLevel,
  },
  // Show additional input for custom symptom that gets added to that patient's availableSymptoms array
  {
    symptom: "Other",
    severity: symptomLevel,
  },
  {
    symptom: "None",
  },
];

const mentalState = [
  "Happy",
  "Hopeful",
  "Fine",
  "Sad",
  "Discouraged",
  "Depressed",
  "Suicidal thoughts",
];

// DANGER alert with difficuly swallowing, chewing or shortness of breath responses

// GIVE Encouragement with depressed response

// ALERT with suicidal thoughts response

export const dailyEvaluation = [
  {
    question: "",
    options: symptomList,
  },
];
