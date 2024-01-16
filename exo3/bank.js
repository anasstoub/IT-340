const { debitAccount } = require("./bankDAO");
const { transfer } = require("./bankTransfer");

function transferMoney(accountID,amount){
    let prom = transfer(accountID,amount);
    prom.then((result) => {
        debitAccount(accountID,amount);
    }).catch((err) => {
        console.log(err);
    });
    // debitAccount(accountID,amount);
}

module.exports = {transferMoney};