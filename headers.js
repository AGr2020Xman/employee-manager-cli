const logo = require('asciiart-logo');

const borderArt = "  ".concat("=".repeat(70));

// as per ascii-art docs, following standards to create
const displayLogoArt = () => {
    const settings = {
        name: 'Employee Tracker',
        font: 'Acrobatic',
        lineChars: 10,
        padding: 2,
        margin: 2,
        borderColor: 'red',
        logoColor: 'green',
        textColour: 'white'
    }

    console.log(logo(settings)
        .emptyLine()
        .left("By Andre Grech")
        .right("Version 1.0")
        .render() + "\n");
};

module.exports = { displayLogoArt };