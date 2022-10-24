// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)

const string = "ciao";
const charArr = [];
const reverseArr = [];

function reverse(word,charArr) {
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        charArr.push(char)
        
    }
    for (let i = charArr.length -1 ; i !== -1; i--) {
        const reversedChar = charArr[i];
        console.log(reversedChar);
        reverseArr.push(reversedChar)
    }


}

reverse(string,charArr);

console.log(charArr);
console.log(reverseArr);