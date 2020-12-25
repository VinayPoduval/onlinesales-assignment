const result = {
    "data": [
        {
            "user": "Ezra Miller",
            "date": "2020-11-01",
            "steps": 9999,
            "department": "Information Technology"
        },
        {
            "user": "Ezra Miller",
            "date": "2020-11-02",
            "steps": 15000,
            "department": "Information Technology"
        },
        {
            "user": "Bruce Banner",
            "date": "2020-12-02",
            "steps": 1000,
            "department": "Management"
        },
        {
            "user": "Thanos",
            "date": "2020-12-05",
            "steps": 4523,
            "department": "Human Resources"
        },
        {
            "user": "Bruce Banner",
            "date": "2020-12-03",
            "steps": 2000,
            "department": "Management"
        },
        {
            "user": "Tony Stark",
            "date": "2020-10-03",
            "steps": 2233,
            "department": "Research and Development"
        },
        {
            "user": "Thanos",
            "date": "2020-12-05",
            "steps": 6000,
            "department": "Human Resources"
        },
        {
            "user": "Ezra Miller",
            "date": "2020-11-02",
            "steps": 4000,
            "department": "Information Technology"
        },
        {
            "user": "Bruce Banner",
            "date": "2020-10-04",
            "steps": 2345,
            "department": "Research and Development"
        },
        {
            "user": "Scarlet Witch",
            "date": "2020-11-13",
            "steps": 1000,
            "department": "DevOps"
        },
        {
            "user": "Tony Stark",
            "date": "2020-11-13",
            "steps": 4033,
            "department": "Research and Development"
        },
        {
            "user": "Tony Stark",
            "date": "2020-10-04",
            "steps": 5033,
            "department": "Research and Development"
        }
    ]
}

const data = result.data;

let depwiseMonthwiseSteps = [], empwiseLeaderboard = [];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'];

for(let i=0; i<data.length; i++) {
    let obj = data[i];
    let department = obj.department;
    
    let date = obj.date;
    let month = months[parseInt(date[5] + date[6])-1];
    
    let steps = obj.steps;

    let newObj = {
        department:department,
        month: month,
        steps: steps
    }
    let checkObj = depwiseMonthwiseSteps.find(e=>(e.department==newObj.department) && (e.month==newObj.month));
    if(checkObj === undefined) {
        depwiseMonthwiseSteps.push(newObj);
    }
    else {
        checkObj.steps += steps;
    }
    /*let obj = data[i];
    let department = obj['department'];
    if(departments.indexOf(department) === -1) {
        departments.push(department);
    }
    
    let date = obj['date'];
    let month = months[(parseInt(date[5] + date[6]))-1];

    let steps = obj['steps']; 

    let dep_month_obj = {
        "department": department,
        "month": month
    }
    dep_wise_month_wise.push(dep_month_obj);*/


}

depwiseMonthwiseSteps = depwiseMonthwiseSteps.sort((a,b)=>a.department>b.department? 1:-1);
