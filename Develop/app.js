const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");   

const render = require("./lib/htmlRenderer");  //take in employees object and send through renderer. and put to outppath


const questions = [
    
    {
        type: "input",
        name: "name",
        message: "Name?",
    },
    {
        type: "input",
        name: "id",
        message: "Id?",
    },
    {
        type: "input",
        name: "email",
        message: "Email address?",
    },
]

//Manager
const managerQuest = [
    {
        type: "input",
        name: "office number",
        message: "What is your office number?",
    }
]

//Engineer
const engineerQuest = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    }
]

//Intern
const internQuest = [
    {
        type: "input",
        name: "school",
        message: "What school do you go to?",
    }
]

//Role
const roleQuest = [
    {
        type: "rawlist",
        name: "role",
        message: "What is your role?",
        choices: ['Engineer', 'Intern', "I don't want to add any more team members!"]
    }
];

//Global
var employees = [];
var person;

//Function to inialize program
async function init() {
    console.log("Set up Manager Info");
    const managerData = await inquirer.prompt(questions)
    const managerOffice = await inquirer.prompt(managerQuest)
    person = new Manager(managerData.name, managerData.id, managerData.email, managerOffice.officeNumber);
    console.log(person);
    employees.push(person);
    teamMember();   //calling function 
}

async function teamMember() {
    const employeePosition = await inquirer.prompt(roleQuest)
    if (employeePosition.role === "Engineer") {
        let employeeData = await inquirer.prompt(questions)
        const engineerAnswer = await inquirer.prompt(engineerQuest)
        person = new Engineer(employeeData.name, employeeData.id, employeeData.email, engineerAnswer.github);
        employees.push(person);
        teamMember();
    } else if (employeePosition.role === "Intern") {
        let employeeData = await inquirer.prompt(questions)
        const internAnswer = await inquirer.prompt(internQuest)
        person = new Intern(employeeData.name, employeeData.id, employeeData.email, internAnswer.school);
        employees.push(person);
        teamMember();
    } else if (employeePosition.role === "I don't want to add any more team members!") {
        fs.writeFile(outputPath, render(employees), function (err) {
            if (err) {
            return console.log(err);
            }
            console.log("The file was created!");
        });
        console.log(employees)
        return
        
    }
    
}
//Function call to initialize program
init();



