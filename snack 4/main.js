// Snack 4:
/* Scrivi una funzione che fonda due array
(aventi lo stesso numero di elementi) prendendo alternativamente
gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

var firstArray = ["a","b","c"];
var secondArray = ["1","2","3"];
var newArray= []

for(var i = 0; i < 3; i++) {
    newArray.push(firstArray[i],secondArray[i])
}
console.log(newArray);