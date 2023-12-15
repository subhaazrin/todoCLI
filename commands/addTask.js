import inquirer from "inquirer";
import { connectDB, disconnectDB } from '../db/connectDB.js';
import Todos from "../schema/todoSchema.js";
import ora from "ora";
import chalk from "chalk";

async function input(){
    const answers=await inquirer.prompt([
        {name: 'name', message: 'Enter name of the task:', type: 'input'},
        {name: 'detail', message: "Enter the details of the task", type: 'input'},
    ]);
    return answers;
}

// const output = await input();
// console.log(output);

const askQuestions = async() => {
    const todoArray = [];
    let keepAsking = false;

    do{
        const response = await input();
        todoArray.push(response);

        const confirmQ = await inquirer.prompt([{ name: 'confirm', message: 'Do you want to add more tasks?', type: 'confirm' }]);
        if(confirmQ.confirm){
            keepAsking = true;
        }else{
            keepAsking = false;
        }
    } while(keepAsking);

    return todoArray;
}



