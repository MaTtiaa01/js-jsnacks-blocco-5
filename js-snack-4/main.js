// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


const firstArr = ["a","b","c"];
const secondArr = [1,2,3];

//do a forEach in both of array to select each element
//create a empty array
// through a for, push every element using firstArr[i] and secondArr[i]

function mix(firstArr,secondArr) {
    const mixArr = [];
    
    for (let i = 0; i < firstArr.length; i++) {
        mixArr.push(firstArr[i],secondArr[i])
        
    }
    return mixArr
}

const finalArr = mix(firstArr,secondArr);
console.log(finalArr);
