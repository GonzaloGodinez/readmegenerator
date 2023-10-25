// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (!license) {
    return
  }
  const badge = `![Static Badge](https://img.shields.io/badge/license-${license}-blue)`
return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="MIT") {
    return `[Link to License](https://choosealicense.com/licenses/mit/)`
  }
  else if (license==="Apache") {
  return `[Link to License](https://choosealicense.com/licenses/mit/)`
}
else if (license==="Gnu") {
  return `[Link to License](https://choosealicense.com/licenses/mit/)`
}
 else if  (license==="None") {
    return ``
 }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license==="MIT") {
    return `short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else if (license==="Apache") {
  return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
}
else if (license==="Gnu") {
  return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
}
 else if  (license==="None") {
    return ``
 }
}

function generateInstall(instList) {
  for (let i = 0; i < instList.length; i++) {
    const element = instList[i];
  if (!steps[i]) {
    return 
    const steps = `enter installation steps`
    return steps
  }}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}


## Description
${data.description}
${data.motivation}
${data.why}
${data.problem}
${data.learn}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
${generateInstall(data.steps)}

## Usage
${data.usage}

## License
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Questions

- Github:${data.github}
- Email:${data.email} 


`;
}

module.exports = generateMarkdown;
