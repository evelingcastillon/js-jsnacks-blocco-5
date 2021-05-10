//Snack 3:
//Scrivi una funzione che accetti una stringa come
//argomento e la ritorni girata (es. Ciao -> oaiC)

function wordreverse(word) {
    var wordArray = word.split('');
    var arrayReverse = wordArray.reverse();
    var newWord = arrayReverse.join('');
    return newWord;
};

var wordUser = wordreverse('Ciao')
console.log(wordUser);