//create parient class with the properties id, lastName , firstName and creationDate
class Patient {
    static Id = 0;
    constructor(lastName, firstName) {
        this.Id = Patient.Id++;
        this.lastName = lastName;
        this.firstName = firstName;
        this.creationDate = new Date();
    }
}

module.exports = { Patient };