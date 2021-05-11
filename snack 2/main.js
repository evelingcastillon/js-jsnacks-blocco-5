//Snack 2:
//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che
//misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.
var zucchina = [
    { varieta : 'Zucchino nero', peso : 100, lunghezza : 15},
    { varieta : 'Zucchino tondo', peso : 180, lunghezza : 23},
    { varieta : 'Zucchino romanesco', peso : 100, lunghezza : 14},
    { varieta : 'Zucchina trombetta', peso : 200, lunghezza : 20},
    { varieta : 'Zucchina bianca', peso : 100, lunghezza : 21},
    { varieta : 'Zucchino giallo', peso : 150, lunghezza : 12},
    { varieta : 'Zucchino giallo rugoso', peso : 100, lunghezza : 20},
    { varieta : 'Zucchina Crookneck', peso : 170, lunghezza : 13},
    { varieta : 'Zucchina rigata', peso : 175, lunghezza : 12},
    { varieta : 'Zucchina striata', peso : 100, lunghezza : 13},
];
var zucchineGrandi = [];
var zucchinePiccoli = [];
for(var i = 0; i < zucchina.length; i++) {
    var zucchinaElement = zucchina[i];
    var zucchinaLunghezza = zucchinaElement.lunghezza;
        if (zucchinaLunghezza > 15) {
            zucchineGrandi.push(zucchinaElement)
        } else {
            zucchinePiccoli.push(zucchinaElement)
        }
}
console.log(zucchineGrandi);
console.log(zucchinePiccoli);



var sommaZuccGrandi = 0;
for(var i = 0; i < zucchineGrandi.length; i++){
    var zucchinaGrandeElement = zucchineGrandi[i];
    var zucchinaGrandePeso = zucchinaGrandeElement.peso;
    sommaZuccGrandi += zucchinaGrandePeso;
}
console.log(sommaZuccGrandi);


var sommaZuccPicc = 0;
for(var i = 0; i < zucchinePiccoli.length; i++){
    var zucchinaPiccElement = zucchinePiccoli[i];
    var zucchinaPiccPeso = zucchinaPiccElement.peso;
    sommaZuccPicc += zucchinaPiccPeso;
}
console.log(sommaZuccPicc);
