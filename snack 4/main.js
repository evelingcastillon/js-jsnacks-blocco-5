// Snack 4:
/* Scrivi una funzione che fonda due array
(aventi lo stesso numero di elementi) prendendo alternativamente
gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

var firstArray = ["a","b","c"];
var secondArray = ["1","2","3"];


function unireArray(array1, array2) {
    var newArray= []
    for(var i = 0; i < 3; i++) {
        newArray.push(array1[i],array2[i]);
    }
    return newArray;
}


console.log(unireArray(firstArray, secondArray));