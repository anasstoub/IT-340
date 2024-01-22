// Définir une classe Event dans le fichier avec les propriétés name, patientId, payload et creationDate
class Event {
    constructor(name, patientId, payload, creationDate) {
        this.name = name;
        this.patientId = patientId;
        this.payload = payload;
        this.creationDate = creationDate;
    }
}