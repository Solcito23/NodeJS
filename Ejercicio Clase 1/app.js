const fs = require('fs');

console.log("Leyendo transacciones del día " + new Date().getDate());


function getTransactionsFail() {
    const fileContent = fs.readFileSync('transactions.txt', 'UTF-8');
    const lines = fileContent.split(/\r?\n/);
    var contador = 0;

    for (let index = 1; index < lines.length; index++) {
        const transaction = lines[index];
        var transactionArray = transaction.split('|');
        if (transactionArray[transactionArray.length - 1] != "OK") {
            console.log(transactionArray[0]);
            contador++;
        }
    }
    console.log("Transacciones fallidas: " + contador + "/" + (lines.length - 1));

}

getTransactionsFail();