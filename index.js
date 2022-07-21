// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'What is your title?',
        type:'input',

     },
     {
        name:'input',
        message: 'Conterbution',
        type:'How can others contribute to this project?',

     },
     {
        name:'input',
        message: 'License',
        type:'Who is your project liscensed with?',

     },
    ]
   

.then((answers)=> {
   const htmlPageContent = generateHTML(answers);

   fs.writeFile('index.html', htmlPageContent,(err)=>
   err ? console.log(err) : console.log('succsessfully created intex.html'))

})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(filename, data , err =>{
        if (err){
            return console.log(err)

        }
        console.log('Success')
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {


    })
}

// Function call to initialize app
init();

