//import addPatient from './patientService';
const patientService = require('./patientService');


patientService.addPatient("anass", "toub");
patientService.addPatient("aymam", "wili wili");
console.log(patientService.getPatientList());
console.log(patientService.savePatient(0, "toub", "toto"));
console.log(patientService.getPatientList());

console.log(patientService.getPatient(0));
// console.log(getPatientById.getPatientById(0));
