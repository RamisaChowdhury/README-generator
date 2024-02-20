// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.License}-blue.svg)

  ## Description
  ${data.Description}

  ## Table of Contents
  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)

  *[Contributing](#contributing)
  
  *[Tests](#tests)

  ## Installation
  To install necessary dependencies run the following command:
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  This project is licensed under the ${data.License} license

  ## Contributing
  ${data.Contributing}

  ## Tests
  To run tests, run the following command:
  ${data.Tests}
  
  ## Questions
  If you have any questions about this repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username})
`;
}

export default generateMarkdown;
