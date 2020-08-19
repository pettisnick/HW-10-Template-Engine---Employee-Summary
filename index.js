//How do I show what role each employee is?
//How do I ask multiple employees?
//How do I keep adding multiple employee roles?
//Create HTML so the employee name, role, id, email, etc. show up on it
//Need to TEST my functions

const fs = require("fs");
const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
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
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "I am a " + Manager;
    }

}

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        super.getName();
        super.getId();
        super.getEmail();
        this.github = github;
    }

    getRole() {
        return "I am an " + Engineer;
    }
}

class Intern  extends Employee {
    constructor(school) {
        super(name, id, email);
        super.getName();
        super.getId();
        super.getEmail();
        this.school = school;
    }

    getRole() {
        return "I am an " + Intern;
    }
}

const questions = [

    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your Id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    /*
        type: "input",
        name: "office number",
        message: "What is your office number?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "school",
        message: "What school do you go to?",
    },*/
    {
        type: "rawlist",
        name: "role",
        message: "What is your role?",
        choices: ['Manager', 'Engineer', 'Intern'],
    },
   
];


//Function to inialize program
function init() {
    var Employees = [];
    inquirer.prompt(questions).then(data => {
        //New 'key' for employee role
        if (data.role == "Manager") {
    inquirer.prompt({
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
    }).then(data2 => {
        const Employee = new Manager(data.name, data.id, data.email, data2.officeNumber);
        console.log(Employee);
        Employees.push(Employee);
    })
     } if (data.role == "Engineer") {
         inquirer
     }
        
        
    })
    console.log(Employees);
}



//Template for the html
//const output = `${data.name} ${data.teamRole}`

//Creating the 'team.html' file
//fs.writeFile('Team.html', output, function (err) {
  //  if (err) {
    //    return console.log(err);
   // }
   // console.log("Good job! Your team has been built!");
//});

//Function call to initialize program
init();