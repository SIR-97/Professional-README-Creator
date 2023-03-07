// function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributing, tests, githubUsername, email } = data;

  return `# ${title}

  ![badge](https://img.shields.io/badge/license-${license.replace(" ", "%20")}-brightgreen)

  ## Description

  ${description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${installation}

  ## Usage

  ${usage}

  ## License

  This project is covered under the ${license} license.

  ## Contributing

  ${contributing}

  ## Tests

  ${tests}

  ## Questions

  For additional questions, please contact ${githubUsername} at ${email}.
  `;


}

module.exports = generateMarkdown;
