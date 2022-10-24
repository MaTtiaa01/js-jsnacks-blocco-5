// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    {
        varieta: "cono",
        weight: 5,
        length: 5,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 10,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 25,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 15,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 13,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 14,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 10,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 13,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 20,
    },
    {
        varieta: "cono",
        weight: 10,
        length: 5,
    },
]

const bigOnes =[];
const smallOnes = [];
zucchine.forEach((zucchina) => {
    if (zucchina.length > 15) {
        bigOnes.push(zucchina)
    }else if(zucchina.length < 15) {
        smallOnes.push(zucchina)
    }
})

console.log(bigOnes);
console.log(smallOnes);



//somma peso di bigOnes
let bigWeight = 0;
bigOnes.forEach((bigZucchina) => {
    bigWeight += bigZucchina.weight;
})
console.log(bigWeight);

//somma di smallOnes

let smallWeight = 0;
smallOnes.forEach((smallZucchina) => {
    smallWeight += smallZucchina.weight;
})
console.log(smallWeight);
