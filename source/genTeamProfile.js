const fs = require("fs");
const workersArray = [];

let generateManager = (managerResponse) => {
    const {managerName, managerId, managerEmail, managerOfficeNumer} = managerResponse;

    let managerCard = `
    <div class= "card"> 
        <div class="card-body">
            <h5 class="card-title"> ${managerName} </h5>
            <h4 class="card-title"> Manager </h4>
            <p class="card-text> ManagerID: ${managerId} </p>
            <p class="card-text"> Office: ${managerOfficeNumer} </p>
            <p class="card-text> Manager's Email: <a href="mailto:${managerEmail}"> ${managerEmail} </a> </p>
        </div>
    </div>`;

    workersArray.push(managerCard);
    return workersArray;
};

let generateEngineer = (engineerResponse) => {
    const {engineerName, engineerId, engineerEmail, engineerGithub} = engineerResponse;

    let engineerCard = `
    <div class= "card"> 
        <div class="card-body">
            <h5 class="card-title"> ${engineerName} </h5>
            <h4 class="card-title"> engineer </h4>
            <p class="card-text> engineerID: ${engineerId} </p>
            <p class="card-text"> Github Profile: https://github.com/${engineerGithub} </p>
            <p class="card-text> engineer's Email: <a href="mailto:${engineerEmail}"> ${engineerEmail} </a> </p>
        </div>
    </div>`;

    workersArray.push(engineerCard);
    return workersArray;
};

let generateIntern = (internResponse) => {
    const {internName, internId, internEmail, internSchool} = internResponse;

    let internCard = `
    <div class= "card"> 
        <div class="card-body">
            <h5 class="card-title"> ${internName} </h5>
            <h4 class="card-title"> Intern </h4>
            <p class="card-text> InternID: ${internId} </p>
            <p class="card-text"> School's Name: ${internSchool} </p>
            <p class="card-text> Intern's Email: <a href="mailto:${internEmail}"> ${internEmail} </a> </p>
        </div>
    </div>`;

    workersArray.push(internCard);
    return workersArray;
};

let generateHTML = () => {
    let allArray = workersArray.join("");

    let workPage = 
        `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="./styles.css">
                    <title>Team Profile</title>
                </head>
                <body>
                    <header>
                        <h1> List of Workers </h1>
                    </header>

                    <main>
                        <div class="justify-content-center align-items-center d-flex">
                            ${allArray}
                        </div>
                    </main>

                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </body>
            </html>`;

    const filename = `./dist/index.html`;
    fs.writeFile(filename, workPage, (err) =>
        err ? console.error(err) : console.log("page generated successfully"));
};

const workersCards = {generateManager, generateEngineer, generateIntern, generateHTML};

module.exports = workersCards;