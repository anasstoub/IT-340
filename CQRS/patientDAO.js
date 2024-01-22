let database = require('./database');
function insertPatient(patient){
    // insert the patient in the databas
    database.patients.push(patient);
    console.log("Patient added", database.patients);


}
// retrieve the list of patients without creation date
function retrievePatientList(){
    // retrieve the list of patients without creation date
    return database.patients.map(patient => {
        return {
            id: patient.Id,
            lastName: patient.lastName,
            firstName: patient.firstName,
        }
    });
}

function getPatientById(id){
    return database.patients.find(patient => patient.Id === id);
}

function updatePatient(patient){
    // update the patient in the database
    database.patients[patient.Id] = patient;
}

function retrievePatient(id){
    patient = getPatientById(id);
    patient.name = patient.lastName + " " + patient.firstName;
    return patient;
}

// console.log(getPatientById(0));

// module.exports = {insertPatient};
module.exports = {insertPatient,retrievePatientList,getPatientById,updatePatient,retrievePatient};