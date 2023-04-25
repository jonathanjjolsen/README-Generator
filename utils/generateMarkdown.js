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
    case "GNUPLv3":
      licenselink = "https://www.gnu.org/licenses/";
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
  let completeLicense = "";

  if (license != "None") {
    completeLicense += badge;
    completeLicense += licenselink;
  }
  return completeLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  -[Project Description] \n
  -[Installation] \n
  -[Usage] \n
  -[License] \n
  -[Contributions] \n
  -[Tests] \n
  -[Questions] \n

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  For more information use this link ${renderLicenseLink(data.license)}

  ## Contributions
  ${data.contributers}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
