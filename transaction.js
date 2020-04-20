const fs = require('fs');
const dateFormat = require('date-format');

function getTransactions(data) {
    var contentText = "ID".padEnd(9, ' ') + "|" + "DATE".padEnd(19, ' ') + "|STATUS";
    var status = ["OK", "RJ", "CD"];
    for (let index = 0; index < 20; index++) {

        var dateTime = dateFormat.asString('dd-MM-yyyy hh:mm:ss', new Date());
        var id = index.toString().padStart(8, "0");
        id = id.substr(0, 4) + "-" + id.substr(4, 8);

        let random = Math.floor(Math.random() * 3);
        var descriptionStatus = status[random];

        contentText = contentText + "\n" + id + "|" + dateTime + "|" + descriptionStatus;
    }

    fs.writeFile('transactions.txt', contentText, (err) => {
        if (err) console.log(err);
        console.log('Se creó el archivo con detalle de transacciones');
    });

}

console.log('Iniciando listado de transacciones....');
getTransactions();