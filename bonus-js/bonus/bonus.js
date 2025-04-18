// 1. Somma solo numeri pari
// Obiettivo: Data un array di numeri, sommare solo quelli pari.
const numeri1 = [2, 5, 8, 3, 10, 7];
// Output atteso: 20 (2 + 8 + 10)

let somma = 0;

for(let i = 0; i < numeri1.length ; i++){
    if (numeri1[i] % 2 === 0){
        somma += numeri1[i];
    }
     
}
console.log(somma);

// 2. Conta quante volte appare un valore
// Obiettivo: Contare quante volte appare il valore "rosso" in un array di stringhe.
const colori = ["rosso", "blu", "rosso", "verde", "rosso"];
// // Output atteso: 3

let redSum = 0;

for(let i = 0; i< colori.length; i++ ){
    if(colori[i] === "rosso"){
        redSum ++ ; 
    }
}
console.log(redSum);

// 🔄 3. Inverti un array
// Obiettivo: Creare un nuovo array con gli elementi in ordine inverso (senza usare .reverse()).
const input = [1, 2, 3, 4];
// Output atteso: [4, 3, 2, 1]

const reverseArray = [] ; 

for(i= input.length - 1; i >= 0; i--){
    const reverseIndex = input[i];
    reverseArray.push(reverseIndex);
}
console.log(reverseArray);

// ✂️ 4. Trova il minimo
// Obiettivo: Stampare il valore più piccolo in un array di numeri. 
const numeri2 = [45, 2, 89, 3, 22];
// // Output atteso: 2

let min= numeri2[0] ;

for(let i = 0; i < numeri2.length; i++){
    if (numeri2[i] < min){
        min = numeri2[i];
    }
}
console.log(min)

let max = numeri2[0];

for(let i = 0; i<numeri2.length; i++){
    if(numeri2[i]>max){
        max = numeri2[i];
    }
}

console.log(max)

// 5. Somma degli indici dispari
// Obiettivo: Sommare i numeri che si trovano in posizioni dispari dell’array.
const arr = [10, 20, 30, 40, 50, 60];
// // Output atteso: 20 + 40 + 60 = 120

let sommaDispari=0;

for(i=1; i< arr.length; i= i + 2){
    sommaDispari = sommaDispari + arr[i];
}
console.log(sommaDispari)

// 🧮 6. Differenza tra max e min
// Obiettivo: Calcolare la differenza tra il numero più grande e quello più piccolo in un array.
const numeri3 = [5, 12, 3, 20, 8];
// // Output atteso: 20 - 3 = 17


let min1= numeri3[0] ;

for(let i = 0; i < numeri3.length; i++){
    if (numeri3[i] < min1){
        min1 = numeri3[i];
    }
}
console.log(`il valore più piccolo è ${min1}`);

let max1 = numeri3[0];

for(let i = 0; i<numeri3.length; i++){
    if(numeri3[i]>max1){
        max1 = numeri3[i];
    }
}

console.log(`il valore più grande è ${max1}`);

let diff = max1 -min1;
console.log(diff)


// 🟦 7. Conta booleani veri
// Obiettivo: Contare quanti elementi true ci sono in un array di booleani.
const flags = [true, false, true, true, false];
// // Output atteso: 3

let count = [0];

for(i=0; i<flags.length; i++){
    if(flags[i] === true)
        count ++;
}
console.log(count)

// 🧊 8. Crea un nuovo array con i doppi
// Obiettivo: Creare un array in cui ogni numero è il doppio di quello originale. (senza uso di .map)
const numeri4 = [1, 2, 3, 4];
// // Output atteso: [2, 4, 6, 8]

let double = [];

for (i=0; i<numeri4.length; i++){
    doubleNum = numeri4[i] * 2;
    double.push(doubleNum);
}
console.log(double)


// 🔤 9. Conta le vocali in una parola
// Obiettivo: Data una stringa, contare quante vocali contiene (a, e, i, o, u). PS: che cosa succede se qualche vocale è maiuscola? 😉
// const parola = "elefante";
// // Output atteso: 4


// 🔄 10. Rimuovi i duplicati da un array (senza .filter o Set)
// Obiettivo: Creare un nuovo array che contiene ogni valore una sola volta.
// const input = [1, 2, 2, 3, 1, 4];
// // Output atteso: [1, 2, 3, 4]


// 📊 11. Conta quanti numeri sono maggiori della media
// Obiettivo: Calcolare la media dei numeri, poi contare quanti sono sopra la media.
// const numeri = [5, 10, 15, 20, 25];
// // Media = 15 → Output atteso: 2 (20 e 25)


// 🧮 12. Somma delle cifre di un numero
// Obiettivo: Sommare tutte le cifre di un numero (es: 472 → 4+7+2)
// const numero = 472;
// // Output atteso: 13



// 🔢 13. Trova il secondo numero più grande
// Obiettivo: Trovare il secondo valore più grande in un array.
// const numeri = [10, 40, 30, 20];
// // Output atteso: 30


// 🧮 14. Conta la somma dei numeri dispari in un array misto
// Obiettivo: Calcolare la somma solo dei numeri dispari in un array che contiene anche stringhe o altri tipi.
// const dati = [3, "ciao", 4, true, 7, 2];
// // Output atteso: 10 (3 + 7)


// 🔤 15. Trova la parola più lunga in un array di stringhe
// Obiettivo: Restituire la stringa più lunga da un array.
// const parole = ["sole", "albero", "casa", "elefante"];
// // Output atteso: "elefante"


// 🔍 16. Verifica se un array è ordinato in modo crescente
// Obiettivo: Controllare se i numeri sono in ordine crescente.
// const numeri = [1, 2, 3, 4, 5]; // Output: true
// const altri = [1, 3, 2]; // Output: false


// 🔢 17. Somma delle posizioni pari ma solo se il numero è dispari
// Obiettivo: Sommare tutti i numeri che si trovano in posizione pari (0, 2, 4…) ma solo se il numero è dispari.
// const arr = [1, 4, 3, 6, 5, 8]; 
// // Posizioni pari: 1 (dispari), 3 (dispari), 5 (dispari) → Somma: 1 + 3 + 5 = 9
