const fs = require("fs");
const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email, getName, getId, getEmail, getRole) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return "My name is " + this.name;
    }

    getId() {
        return "My ID is " + this.id;
    }

    getEmail() {
        return "My email is " + this.email;
    }

    getRole() {
        return "I am an " + Employee;
    }
}

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        super.getName();
        super.getId();
        super.getEmail();
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "I am a " + Manager;
    }

}

class Engineer extends Employee {
    constructor(github) {
        this.github = ;
    }
}

class Intern  extends Employee {
    constructor(school, getSchool, getRole) {
        this.school = school;
    }
}