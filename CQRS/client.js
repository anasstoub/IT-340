//import addPatient from './patientService';
// const patientService = require('../CQRS/patientService');
const patientQuery = require('./patientQuery');
const patientObject = require('./patientCommand');




patientService.addPatient("anass", "toub");
patientService.addPatient("anass", "toub");
patientService.addPatient("hafidi", "aymen");

console.log(patientService.getPatient(0));
// console.log(getPatientById.getPatientById(0));

// Appeler la nouvelle fonction getPatientList depuis le fichier client.js
console.log(patientDAO.getPatientList());

// Appeler la nouvelle fonction savePatient depuis le fichier client.js
console.log(patientObject.savePatient(0,"toub","anass"));

// Appeler la nouvelle fonction getPatient depuis le fichier client.js
console.log(patientService.getPatient(0));