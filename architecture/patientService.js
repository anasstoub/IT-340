const patientObject = require('./patient');
const patientDAO = require('./patientDAO');

function addPatient(lastname, firstname){
    // créer une instance de Patient et appeler la fonction insertPatien de patientDAO
    let patient = new patientObject.Patient(lastname, firstname);
    patientDAO.insertPatient(patient);
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