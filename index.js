const inquirer = require('inquirer')
const Manager = require('./Library/Manager')
const Engineer = require('./Library/Engineer')
const Intern = require('./Library/Intern')
let employeeDatabase = []

function newManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter manager name',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'Enter manager ID',
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'Enter manager email',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'Enter manager office number',
            name: 'managerOfficeNumber',
        }
    ]).then(response => {
        const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
        employeeDatabase.push(newManager)
        newTeamMember()
    });
};

function newTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'Exit Application'],
            message: 'What would you like to add?',
            name: 'memberName',
        }
    ]).then(response => {
        switch (response.memberName) {
            case 'Engineer':
                newEngineer();
                break;
            case 'Intern':
                newIntern();
                break;
            default:
                genHtml()
        };
    });
};

function newEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter engineer name',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'Enter engineer ID',
            name: 'engineerId',
        },
        {
            type: 'input',
            message: 'Enter engineer email',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'Enter engineer\'s github',
            name: 'engineerGitHub',
        }
    ]).then(response => {
        const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub)
        employeeDatabase.push(newEngineer)
        newTeamMember()
    });
};

function newIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter intern name',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'Enter intern ID',
            name: 'internId',
        },
        {
            type: 'input',
            message: 'Enter intern email',
            name: 'internrEmail',
        },
        {
            type: 'input',
            message: 'Enter intern\'s school',
            name: 'internSchool',
        }
    ]).then(response => {
        const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
        employeeDatabase.push(newIntern)
        newTeamMember()
    });
};

function genHtml() {
    console.log(employeeDatabase)
}

newManager()