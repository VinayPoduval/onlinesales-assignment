const json = require('./company_data.json');
const data = json.data;

let depwiseMonthwiseSteps = [], empwiseLeaderboard = [];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'];

for(let i=0; i<data.length; i++) {
    let obj = data[i];
    
    let date = obj.date;
    let month = months[parseInt(date[5] + date[6])-1];
    
    let depWise = {
        department:obj.department,
        month: month,
        steps: obj.steps
    }
    let checkDepWise = depwiseMonthwiseSteps.find(e=>(e.department==depWise.department) && (e.month==depWise.month));
    if(checkDepWise === undefined) {
        depwiseMonthwiseSteps.push(depWise);
    }
    else {
        checkDepWise.steps += obj.steps;
    }

    let empWise = {
        name: obj.user,
        month: month,
        steps: obj.steps
    }
    let checkEmpWise = empwiseLeaderboard.find(e=>(e.name==empWise.name) && (e.month==empWise.month));
    if(checkEmpWise === undefined) {
        empwiseLeaderboard.push(empWise);
    }
    else {
        checkEmpWise.steps += obj.steps;
    }
}

depwiseMonthwiseSteps = depwiseMonthwiseSteps.sort((a,b)=>a.department>b.department? 1:-1);
empwiseLeaderboard = empwiseLeaderboard.sort((a,b)=>(a.month>b.month?-1:(a.month<b.month?1:(a.steps-b.steps))));
console.log(depwiseMonthwiseSteps);
console.log(empwiseLeaderboard);

let fields1 = ['Department', 'Month', 'Steps'].join('\t');
let fields2 = ['Name', 'Month', 'Steps'].join('\t');

const fs = require('fs');

fs.appendFile('DeptWise.tsv', fields1, function(err) {
    if(err) throw err;
});
for(let i=0; i<depwiseMonthwiseSteps.length; i++) {
    let obj = depwiseMonthwiseSteps[i];
    let newLine = "\n" + obj.department + "\t" + obj.month + "\t" + obj.steps;
    fs.appendFile('DeptWise.tsv', newLine, function(err) {
        if (err) throw err;
    })
}

fs.appendFile('EmpWise.tsv', fields2, function(err) {
    if(err) throw err;
});
for(let i=0; i<empwiseLeaderboard.length; i++) {
    let obj = empwiseLeaderboard[i];
    let newLine = "\n" + obj.name + "\t" + obj.month + "\t" + obj.steps;
    fs.appendFile('EmpWise.tsv', newLine, function(err) {
        if (err) throw err;
    })
}