const { displayLogoArt } = require('./src/util/headers');
const { startMenu } = require('./src/util/startCLI');

const init = () => {
    displayLogoArt();
    startMenu();
};

init();