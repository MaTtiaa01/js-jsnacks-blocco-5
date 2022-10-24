// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

const normalArr = [3,4,5,6,7,8,9,10];
const numb1 = 4;
const numb2 = 9;

function pickNumb(array,numb1,numb2) {
    
    const newArr = [];
    array.forEach(element => {
        if (element > 4 && element < 9) {
            newArr.push(element)
        }
    });
    return newArr
}

const finalArr = pickNumb(normalArr,numb1,numb2);
console.log(finalArr);