// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'mit'){
    return "[![License=mit](https://img.shields.io/badge/license-MIT-blue)](https://api.github.com/licenses/mit)]"
  }

  if(license === 'epl-2.0'){
    return "[![License:epl-2.0](https://img.shields.io/badge/license-epl--2.0-red)(https://api.github.com/licenses/epl-2.0)]"}

    if(license === 'mit'){
      return




}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
