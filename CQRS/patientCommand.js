const patientCommandDAO = require("./patientCommandDAO")
const patientQueryDAO = require("./patientQueryDAO")
const patientObject = require("./patient")
const cache = require("./cache")


function addPatient(lastname, firstname){
    // créer une instance de Patient et appeler la fonction insertPatien de patientDAO
    let patient = new patientObject.Patient(lastname, firstname);
    // Modifier la fonction addPatient pour ajouter également un patient dans la propriété patientList mais sans la date de création
    patientCommandDAO.insertPatient(patient);
    let c = {...patient};
    c.name = c.lastName + " " + c.firstName;
    cache.PatientCache[patient.Id] = c;
}


function savePatient(id, lastName, firstName){
    patientbyID = patientDAO.getPatientById(id);
    patientbyID.lastName = lastName;
    patientbyID.firstName = firstName;
    patientCommandDAO.updatePatient(patient);
    let c = {...patient};
    c.name = c.lastName + " " + c.firstName;
    cache.PatientCache[patient.Id] = c;
}

module.exports = {addPatient,savePatient};