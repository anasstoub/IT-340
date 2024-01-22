const database = require('./database');
const cache = require("./cache")

function  getPatientByID(id){
    return database.patients.find(patient => patient.id == id)
}

function retrievePatientList(){
    return  database.patientList
}
function retrievePatient(id){
    return cache.patientCache[id]

}
module.exports = {getPatientList,retrievePatientList, retrievePatient};