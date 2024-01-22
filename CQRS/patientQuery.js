const patientQueryDAO = require("./patientQueryDAO")

function getPatientList(){
    return patientQueryDAO.retrievePatientList()
}
function getPatient(id){ 
    return patientQueryDAO.retrievePatient(id)
}
module.exports = {getPatientList, getPatient}