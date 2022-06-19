const { faker } = require('@faker-js/faker');

class Object {
    constructor() {
        this._id = faker.random.alphaNumeric(24);
        this.bigid = "bigid-pii_record-" + faker.random.alphaNumeric(12);
        this.companyName = faker.company.companyName;
        this.email = faker.internet.email;
        this.city = faker.address.city;
        this.identity_unique_id = faker.random.alphaNumeric(24);
        this.identity_name = faker.name.findName();
        this.country = faker.address.country();
        this.system_location = faker.address.country();
        this.risk = faker.random.numeric(1);
        this.pii_record_hash = faker.random.alphaNumeric(24);
    }

    createObject() {
        return {
            "_id": this._id,
            "bigid": this.bigid,
            "companyName": this.companyName,
            "email": this.email,
            "city": this.city,
            "identity_unique_id": this.identity_unique_id,
            "identity_name": this.identity_name,
            "country": this.country,
            "system_location": this.system_location,
            "risk": this.risk,
            "pii_record_hash": this.pii_record_hash
        }
    }
}

module.exports = Object;
