const express = require("express");
const app = express();
const port = 8000;
var faker = require('faker');

class User {
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this._id = faker.datatype.uuid();
        this.companyName = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (reg, res)=>{
    let newUser = new User();
    res.json({data: newUser})
})

app.get("/api/companies/new", (reg, res)=>{
    let newCompany = new Company();
    res.json({data: newCompany})
})

app.get("/api/user/company", (reg, res)=>{
    let newUser = new User();
    let newCompany = new Company();
    res.json({data: [newUser, newCompany]})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );