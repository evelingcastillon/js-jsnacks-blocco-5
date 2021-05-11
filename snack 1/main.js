//Snack 1:
/* Crea un array di 10 oggetti che rappresentano una zucchina,
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

var zucchina = [
    { varieta : 'Zucchino nero', peso : 100, lunghezza : 21},
    { varieta : 'Zucchino tondo', peso : 180, lunghezza : 23},
    { varieta : 'Zucchino romanesco', peso : 100, lunghezza : 21},
    { varieta : 'Zucchina trombetta', peso : 200, lunghezza : 20},
    { varieta : 'Zucchina bianca', peso : 100, lunghezza : 21},
    { varieta : 'Zucchino giallo', peso : 150, lunghezza : 22},
    { varieta : 'Zucchino giallo rugoso', peso : 100, lunghezza : 20},
    { varieta : 'Zucchina Crookneck', peso : 170, lunghezza : 20},
    { varieta : 'Zucchina rigata', peso : 175, lunghezza : 22},
    { varieta : 'Zucchina striata', peso : 100, lunghezza : 23},
];
/* 
console.log(zucchina[1].lunghezza ); */

var somma = 0;
for(var i = 0; i < zucchina.length; i++) {
    var zucchinaEl = zucchina[i];
    somma += zucchinaEl.peso;
}
console.log(somma);