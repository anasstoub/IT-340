const { patientList } = require('./database');
const patientObject = require('./patient');
const patientDAO = require('./patientDAO');

function addPatient(lastname, firstname){
    // créer une instance de Patient et appeler la fonction insertPatien de patientDAO
    let patient = new patientObject.Patient(lastname, firstname);
    // Modifier la fonction addPatient pour ajouter également un patient dans la propriété patientList mais sans la date de création
    patientDAO.insertPatient(patient);
    patientDAO.insertPatient(patientList)
    return patient;
}


function getPatientList(){
    return patientDAO.retrievePatientList();
}
function savePatient(id, lastName, firstName){
    patientbyID = patientDAO.getPatientById(id);
    patientbyID.lastName = lastName;
    patientbyID.firstName = firstName;
    patientDAO.updatePatient(patientbyID);
    return patientbyID;
}

function getPatient(id){
    return patientDAO.retrievePatient(id);

}
module.exports = {getPatientList, addPatient,savePatient,getPatient};
// test the function

// addPatient("Doe", "John");
// addPatient("Doe", "Jane");