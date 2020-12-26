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