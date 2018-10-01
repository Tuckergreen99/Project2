"use strict"
const PROMPT = require('readline-sync');

let policyNum, accidentCost;
let custFirstName, custLastName, custAge;
let dueDate, atFaultNum, ageFee, totalBill;

const  BASE_PRICE = 100, RANGE1 = 15, RANGE2 = 30, RANGE3 = 45, RANGE4 = 60
const AGEFEE1 = 20, AGEFEE2 = 10, AGEFEE3 = 30, ATFAULT = 50 ;


function main() {
    setpolicyNum();
    setcustFirstName();
    setcustLastName();
    setdueDate();
    setatFaultNum();
    setcustAge();
    settotalBill();
    setprintResults();
}

main()

function setpolicyNum(){
    policyNum = PROMPT.question("What is your Policy Number?")
}

function setcustFirstName(){
    custFirstName = PROMPT.question("What is your First Name?")
}

function setcustLastName(){
    custLastName = PROMPT.question("What is your Last Name?")
}

function setdueDate(){
    dueDate = PROMPT.question("what is the due date of your insurence payment?(MM/DD/YYYY)")
}

function setatFaultNum(){
    atFaultNum = Number(PROMPT.question("How many at fault accidents have you had?"));
    if (atFaultNum > 0)
        accidentCost = atFaultNum * 50;
    else(accidentCost = 0)
}

function setcustAge(){
    const MAX_AGE = 110
    custAge = PROMPT.question("What is your Age?:");
    if (custAge <15 || custAge > MAX_AGE) {
        console.log('Im sorry that is an incorrect Age. Please try again.');
        return setcustAge();
    }
}

function settotalBill(){
    totalBill = 100;
    if (custAge >= 15) {
        if (custAge <= RANGE1 || custAge >= RANGE2) {
            totalBill = AGEFEE1 + BASE_PRICE;
        } else if (custAge > RANGE2 || custAge <= RANGE3) {
            totalBill = BASE_PRICE + AGEFEE2;
        } else (custAge > RANGE3 || custAge <= RANGE4);
        {
            totalBill = BASE_PRICE + AGEFEE3;
        }
    }
}

function setprintResults() {
    process.stdout.write('\x1Bc')
    console.log("" , custFirstName , "" ,  custLastName, " your total cost of insurence is $", totalBill + accidentCost, "and is due on", dueDate)
}
