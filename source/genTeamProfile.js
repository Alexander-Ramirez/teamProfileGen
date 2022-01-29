const fs = require("fs");
const workersArray = [];

let generateManager = (managerResponse) => {
    const {managerName, managerId, managerEmail, managerOfficeNumer} = managerResponse

    let managerCard = `
    <div class= "card"> 
        <div class="card-body">
            <h5 class="card-title"> ${managerName} </h5>
            <h4 class="card-title"> Manager </h4>
            <p class="card-text> ManagerID: ${managerId} </p>
            <p class="card-text"> Office: ${managerOfficeNumer} </p>
            <p class="card-text> Manager's Email: <a href="mailto:${managerEmail}"> ${managerEmail} </a> </p>
        </div>
    </div>`

    workersArray.push(managerCard);
    return workersArray;
};