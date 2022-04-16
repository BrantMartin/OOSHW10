const inquirer = require('inquirer')
const Manager = require('./Library/Manager')
const Engineer = require('./Library/Engineer')
const Intern = require('./Library/Intern')
const fs = require("fs")
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
            name: 'internEmail',
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
    let htmlTEXT = ""
    employeeDatabase.forEach(element => {
        if(element.getRole() === "intern"){
            htmlTEXT += `<div class="card" style="width: 18rem;">
            <div class="card-header">
              <h3>Intern </h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${element.name}</li>
              <li class="list-group-item">School Name: ${element.schoolName}</li>
              <li class="list-group-item">Id: ${element.id}</li>
              <li class="list-group-item">Email: ${element.email}</li>
            </ul>
          </div>`
        }else if(element.getRole() === 'engineer'){
            htmlTEXT += `<div class="card" style="width: 18rem;">
            <div class="card-header">
              <h3>Intern </h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${element.name}</li>
              <li class="list-group-item">Id: ${element.id}</li>
              <li class="list-group-item">Email: ${element.email}</li>
              <li class="list-group-item">Github: ${element.github}</li>
            </ul>
          </div>`
        }else if (element.getRole() === 'manager'){
            htmlTEXT += `<div class="card" style="width: 18rem;">
            <div class="card-header">
              <h3>Intern </h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${element.name}</li>
              <li class="list-group-item">Id: ${element.id}</li>
              <li class="list-group-item">Email: ${element.email}</li>
              <li class="list-group-item">Github: ${element.officeNumber}</li>
            </ul>
          </div>`
        }
        let htmlBody = `<!doctype html>
        <html lang="en">
          <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        
            <!-- Bootstrap CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
            <title>Hello, world!</title>
          </head>
          <body>
          <header class="bg-danger text-center text-white">
            <h1>Your Team</h1>
        </header>
        <main class="container border border-danger d-flex flex-wrap">
        ${htmlTEXT}
        </main>
            <!-- Optional JavaScript; choose one of the two! -->
        
            <!-- Option 1: Bootstrap Bundle with Popper -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        
            <!-- Option 2: Separate Popper and Bootstrap JS -->
            <!--
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            -->
          </body>
        </html>
        `
        fs.writeFileSync('index.html', htmlBody, function(error){
            if (error) throw error
        });

    });
    
}

newManager()