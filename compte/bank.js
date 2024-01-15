// bank.js
const { retrieveBalance } = require('./bankDAO');

function getBalance(accountId) {
    // Appeler la fonction du fichier bankDAO.js
    sold = retrieveBalance(accountId);
    return sold;
}

module.exports = {
    getBalance,
};

