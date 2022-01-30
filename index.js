const inquirer = require("inquirer");
const fs = require("fs");
const workersCards = require("./source/genTeamProfile");
const generateManager = workersCards.generateManager;
const generateEngineer = workersCards.generateEngineer;
const generateIntern = workersCards.generateIntern;
const generateHTML = workersCards.generateHTML;

const generateMenu = {
    type: "list",
    name: "choice",
    message: "Are you ready to make a team generator?",
    choices: [
        {
            name: "Make the Team",
        },
        {
            name: "So no Team, End",
        },
    ],
};

const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the name of the Manager",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the ID of the manager",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the email of the Manager",
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the office number of the Manager",
    },
];

const addEmployees = [
    {
        type: "list",
        name: "addEmployee",
        message: "Add more employees?",
        choices: [
            {
                name: "Yes, add a team member"
            },
            {
                name: "No"
            },
        ],
    },
];

const employeeJob = [
    {
        type: "list",
        name: "employeeType",
        message: "What job does this employee have?",
        choices: [
            {
                name: "Engineer",
            },
            {
                name: "Intern",
            },
        ],
    },
];

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the name of the Engineer?",
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the ID of the Engineer?",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the email of the Engineer?",
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is the github of the Engineer",
    },
];

const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is the name of the Intern?",
    },
    {
        type: "input",
        name: "internId",
        message: "What is the ID of the Intern?",
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the email of the Intern?",
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is the school of the Intern?",
    },
];

generateTeam();

function generateTeam() {
    inquirer.prompt(generateMenu).then((initChoice) => {
        if (initChoice.choices === "Make the Team") {
            generateManagerItems;
        } else {
            process.exit();
        };
    });
};

function generateManagerItems() {
    inquirer.prompt(managerQuestions).then((managerAnswer) => {
        generateManager(managerAnswer);
        newEmployee();
    });
};

function newEmployee() {
    inquirer.prompt(addEmployees).then((newEmployeeAnswer) => {
        if (newEmployeeAnswer.addEmployee === "Yes, add a team member") {
            generateJobInfo();
        } else {
            generateHTML();
        };
    });
};

function generateJobInfo() {
    inquirer.prompt(employeeJob).then((jobAnswer) => {
        if (jobAnswer.employeeType === "Engineer") {
            generateEnginerInfo();
        } else {
            generateInternInfo();
        };
    });
};

function generateEnginerInfo() {
    inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
        generateEngineer(engineerAnswers);
        newEmployee();
    });
};

function generateInternInfo() {
    inquirer.prompt(internQuestions).then((internAnswers) => {
        generateIntern(internAnswers);
        newEmployee();
    });
};