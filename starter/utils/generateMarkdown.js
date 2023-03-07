// function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributing, tests, githubUsername, email } = data;

  return `# ${title}

  ![badge](https://img.shields.io/badge/license-${license.replace(" ", "%20")}-brightgreen)

 
}

module.exports = generateMarkdown;
