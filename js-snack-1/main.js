// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
        varieta: "cono",
        weight: 5,
        length: 15,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 15,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 15,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 15,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 15,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 15,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 15,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 15,
    },
    {
        varieta: "cono",
        weight: 5,
        length: 15,
    },
    {
        varieta: "cono",
        weight: 10,
        length: 15,
    },
]

//console.log(zucchine.length);
let sum = 0;
zucchine.forEach((zucchina) => {
     sum += zucchina.weight
})

console.log(sum);

