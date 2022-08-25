//function that returns a license badge based on which license is passed in
const license=["agpl-3.0","apache-2.0",'bsd-2-clause',"bsd-3-clause","bsl-1.0","cc0-1.0","mit","epl-2.0",
               "gpl-2.0","gpl-3.0","1gpl-2.1","mpl-2.0","unlicense"]
        


// If there is no license, return an empty string
function renderLicense(license) {
  if (license === "agpl-3.0") {
    return "[![License:agpl-3.0](https://img.shields.io/badge/license-agpl--3.0-ff69b4)(https://api.github.com/licenses/agpl-3.0)]";
  }
  
  if (license === "apache-2.0") {
    return "[![License:apache-2.0](https://img.shields.io/badge/license-apache--2.0-blueviolet)(https://api.github.com/licenses/apache-2.0)]";
  }

  if (license === "bsd-2-clause") {
    return "[![License:bsd-2-clause](https://img.shields.io/badge/license-bsd--2--clause-important)(https://api.github.com/licenses/bsd-2-clause)]";
  }

  if (license === "bsd-3-clause") {
    return "[![License:bsd-3-clause](https://img.shields.io/badge/license-bsd--3--clause-yellow)(https://api.github.com/licenses/bsd-3-clause)]";
  }

  if (license === "bsl-1.0") {
    return "[![License:bsl-1.0](https://img.shields.io/badge/license-bsl--1.0-informational)(https://api.github.com/licenses/bsl-1.0)]";
  }

  if (license === "cc0-1.0") {
    return "[![License:cc0-1.0](https://img.shields.io/badge/license-cc0--1.0-purple)(https://api.github.com/licenses/cc0-1.0)]";
  }

  if (license === "mit") {
    return "[![License=mit](https://img.shields.io/badge/license-MIT-blue)](https://api.github.com/licenses/mit)]";
  }

  if (license === "epl-2.0") {
    return "[![License:epl-2.0](https://img.shields.io/badge/license-epl--2.0-red)(https://api.github.com/licenses/epl-2.0)]";
  }

  if (license === "gpl-2.0") {
    return "[![License=gpl-2.0](https://img.shields.io/badge/license-gpl--2.0-green)(https://api.github.com/licenses/gpl-2.0)]";
  }

  if (license === "gpl-3.0") {
    return "[![License:gpl-3.0](https://img.shields.io/badge/license-gpl--3.0-yellowgreen)(https://api.github.com/licenses/gpl-3.0)]";
  }

  if (license === "1gpl-2.1") {
    return "[![License:1gpl-2.1](https://img.shields.io/badge/license-lgpl--2.1-brightgreen)(https://api.github.com/licenses/lgpl-2.1)]";
  }

  if (license === "mpl-2.0") {
    return "[![License:mpl-2.0](https://img.shields.io/badge/license-mpl--2.0-critical)(https://api.github.com/licenses/mpl-2.0)]";
  }
  if (license === "unlicense") {
    return "[![License:unlicense](https://img.shields.io/badge/license-unlicense-black)(https://api.github.com/licenses/unlicense)]";
  }
  if (license == null){
    console.log('')
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

`;
}

module.exports = generateMarkdown;
