// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        name:'Title',
        message: 'What is your title?',
        type:'input',

     },
        
     {
        name:'input',
        message: 'Description',
        type:'A description of your project. What was your motivation?',

     },
     
     {
        name:'input',
        message: 'Why was this project built?',
        type:'',

     },
     {
        name:'input',
        message: 'Usage',
        type:'How to use this application',

     },
     {
        name:'input',
        message: 'Installation',
        type:'How to install this application?',

     },
     {
        name:'input',
        message: 'Badges',
        type:'Does your project have any badges?',

     },
     {
        name:'input',
        message: 'Collaberation/Credit',
        type:'Who contributed to this project?',

     },
     {
        name:'input',
        message: 'Conterbution',
        type:'How can others contribute to this project?',

     },
     {
      type: "list",
      name: "license",
      message: "Choose license for this project: ",
      choices: [
          "Apache",
          "Academic",
          "GNU",
          "ISC",
          "MIT",
          "Mozilla",
          "Open"
      ]
  },
    ]
   


// TODO: Create a function to write README file
function writeToFile (fileName, data) {

   let content = generateMarkdown(data);
   fs.writeFile(fileName, content, function (error){
      if(error) {
         return console.log(error)
      }
      console.log("succsess!")
   });
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
var fileName = 'README.md';
writeToFile(fileName, data)

    })
}

// Function call to initialize app
init()


