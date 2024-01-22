const database = require("./database")

function insertPatient(patient){
    // insert the patient in the databas
    database.patients.push(patient);
    let c = {...patient};
    delete c.creationDate;
    database.patientList.push(c);
}

function updatePatient(patient){
    // update the patient in the database
    database.patientList.forEach(p => {
        if(p.id === patient.id){
            let c = {...patient};
            delete c.creationDate;
            return c;

        }
        return p;
    });

    database.patients.forEach(p => {
        if(p.Id === patient.Id){
            return patient;
        }
        return p;
    });
}

module.exports = {insertPatient,updatePatient};