const eventStore = require("./eventStore");
const patientCommandDAO = require("./patientCommandDAO");

let id = 1;

function addPatient(lastName, firstName) {
    const payload = { lastName: lastName, firstName: firstName };
    const date = new Date();
    eventStore.addEvent("patientAdded", id++, payload, date);
    patientCommandDAO.insertPatient({ id: id, ...payload, creationDate: date });
}

function restorePatient(id) {
    const events = eventStore.getPatientEvents(id);
    let patient;
    events.forEach((event) => {
        switch (event.name) {
            case "patientAdded":
                patient = { ...event.payload, id: id, creationDate: event.creationDate };
                break;
            case "patientSaved":
                patient.firstName = event.payload.firstName;
                patient.lastName = event.payload.lastName;
                break;
        }
    });
    return patient;
}

function savePatient(id, lastName, firstName) {
    const patient = restorePatient(id);
    if (patient) {
        const payload = { lastName: lastName, firstName: firstName };
        eventStore.addEvent("patientSaved", id, payload);
        patientCommandDAO.updatePatient({ id: id, ...payload, creationDate: patient.creationDate });
    }
}

module.exports = { addPatient, restorePatient, savePatient };
