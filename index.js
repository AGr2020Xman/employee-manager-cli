const { displayLogoArt } = require('./headers');
const { startMenu } = require('./startCLI');

const init = () => {
    displayLogoArt();
    startMenu();
};

init();