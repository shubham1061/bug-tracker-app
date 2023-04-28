 import bugModel from "../../models/bugModel";

 export function retrieveBugs(){
    let data=[];

    data.push(new bugModel({
        _id:23465789,
        name:"crash on Load",
        details:"crash after 3 seconds",
        steps:"open application and it will crash",
        version:"V2.0",
        assigned:"Shubham Kaushik",
        creator:"Shubham Arora",
        priority:1,
        time:"00:30",

    }))
    data.push(new bugModel({
        _id:23465790,
        name:"wont Load",
        details:"crash after 3 seconds",
        steps:"open application and it will crash",
        version:"V2.0",
        assigned:"Shubham Kaushik",
        creator:"Shubham Arora",
        priority:3,
        time:"01:12",

    }))

    let sorted =data.sort((a,b)=>{return a.priority-b.priority})
    return sorted;
 }