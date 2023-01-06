const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What's the project title?",
      name: "title",

      valitdate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "How do you install your app?",
      name: "installation",
      valitdate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "Instructions to follow?",
      name: "instructions",
      valitdate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "Credits?",
      name: "credits",
      valitdate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "How do you use your app?",
      name: "usage",
      valitdate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "list",
      message: "What license did you use?",
      name: "license",
      choices: [
        "The MIT License",
        "The GPL License",
        "Apache License",
        "GNU License",
        "N/A",
      ],
      valitdate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "GitHub username?",
      name: "git",
      valitdate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    },
    {
      type: "input",
      message: "Email:",
      name: "email",
      valitdate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value to continue";
        }
      },
    }, 
    {
        type: "input",
        message: "Linkedin",
        name: "linkedin",
        valitdate: (value) => {
          if (value) {
            return true;
          } else {
            return "I need a value to continue";
          }
        },
      }, 
      {
        type: "input",
        message: "Contributions?",
        name: "contribution",
        valitdate: (value) => {
          if (value) {
            return true;
          } else {
            return "I need a value to continue";
          }
        },
      },
  ])
  .then(
    ({
      title,
      installation,
      instructions,
      credits,
      license,
      git,
      linkedin,
      email,
      usage,
      contribution,
    }) => {
      // template for readme
      const template = `# ${title}

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Credits](#credits)
* [License](#license)
# Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
### Instructions
${instructions}
## Credits
${credits}
## License
${license}

# Contact
* GitHub :${git}
* Linkedin :${linkedin}
* Email: ${email}`;
      //Funtion to create the readMe with fs
      createNewFile(title, template);
    }
  );
// creating out createnewfile funciton
function createNewFile(fileName, data) {
  //fs
  fs.writeFile(
    `./${fileName.toLowerCase().split(' ').join('')}.md`,
    data,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Your ReadME has been generated");
    }
  );
}
