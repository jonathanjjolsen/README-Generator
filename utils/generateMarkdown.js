// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license != 'None') {
    badge = "[![License](https://img.shields.io/badge/License-" + license + "-blue.svg)](https://opensource.org/licenses/" + license + ")"
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
      licenselink = "https://mit-license.org/";
      break;
    case "Apache2.0":
      licenselink = "https://www.apache.org/licenses/LICENSE-2.0";
      break;
    case "IBM":
      licenselink = "https://www.ibm.com/about/software-licensing/licensing/basics";
      break;
    case "ISC":
      licenselink = "https://opensource.org/license/isc-license-txt/";
      break;
    default:
      licenselink = "";
  }

  return licenselink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != 'None') {
  return `## [License](#table-of-contents)

  This application is covered by the following licesne:

  ${renderLicenseLink(license)}
  `
  }
  else{
    return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  [Project Description](#description) \n
  [Installation](#installation) \n
  [Usage](#usage) \n
  [License](#license) \n
  [Contributions](#contributions) \n
  [Tests](#tests) \n
  [Questions](#questions) \n

  ## [Description](#table-of-contents)
  ${data.description}

  ## [Installation](#table-of-contents)
  ${data.installation}

  ## [Usage](#table-of-contents)
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## [Contributions](#table-of-contents)
  ${data.contributers}

  ## [Tests](#table-of-contents)
  ${data.tests}

  ## [Questions](#table-of-contents)
  For any questions, submit to the following resources. \n
  Email: ${data.email} \n
  Github: ${data.github}

`;
}

module.exports = generateMarkdown;
