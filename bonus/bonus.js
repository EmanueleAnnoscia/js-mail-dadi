// 1. Somma solo numeri pari
// Obiettivo: Data un array di numeri, sommare solo quelli pari.
const numeri = [2, 5, 8, 3, 10, 7];
// Output atteso: 20 (2 + 8 + 10)

let somma;

for(let i = 0; i < numeri.length ; i++){
    if (numeri[i] % 2 === 0;){
        somma += numeri[i];
    }
     
}
console.log(somma);

// 2. Conta quante volte appare un valore
// Obiettivo: Contare quante volte appare il valore "rosso" in un array di stringhe.
const colori = ["rosso", "blu", "rosso", "verde", "rosso"];
// // Output atteso: 3

let redSum;

for(let i = 0; i< colori.length; i++ ){
    if(colori[i] === "rosso"){
        redSum ++ ; 
    }
}
console.log(redSum);

🔄 3. Inverti un array
Obiettivo: Creare un nuovo array con gli elementi in ordine inverso (senza usare .reverse()).
const input = [1, 2, 3, 4];
// Output atteso: [4, 3, 2, 1]

for(i= input.length; i >= 0; i--){
    
}


✂️ 4. Trova il minimo
Obiettivo: Stampare il valore più piccolo in un array di numeri.
const numeri = [45, 2, 89, 3, 22];
// Output atteso: 2



🔢 5. Somma degli indici dispari
Obiettivo: Sommare i numeri che si trovano in posizioni dispari dell’array.
const arr = [10, 20, 30, 40, 50, 60];
// Output atteso: 20 + 40 + 60 = 120


🧮 6. Differenza tra max e min
Obiettivo: Calcolare la differenza tra il numero più grande e quello più piccolo in un array.
const numeri = [5, 12, 3, 20, 8];
// Output atteso: 20 - 3 = 17


🟦 7. Conta booleani veri
Obiettivo: Contare quanti elementi true ci sono in un array di booleani.
const flags = [true, false, true, true, false];
// Output atteso: 3


🧊 8. Crea un nuovo array con i doppi
Obiettivo: Creare un array in cui ogni numero è il doppio di quello originale. (senza uso di .map)
const numeri = [1, 2, 3, 4];
// Output atteso: [2, 4, 6, 8]


🔤 9. Conta le vocali in una parola
Obiettivo: Data una stringa, contare quante vocali contiene (a, e, i, o, u). PS: che cosa succede se qualche vocale è maiuscola? 😉
const parola = "elefante";
// Output atteso: 4


🔄 10. Rimuovi i duplicati da un array (senza .filter o Set)
Obiettivo: Creare un nuovo array che contiene ogni valore una sola volta.
const input = [1, 2, 2, 3, 1, 4];
// Output atteso: [1, 2, 3, 4]


📊 11. Conta quanti numeri sono maggiori della media
Obiettivo: Calcolare la media dei numeri, poi contare quanti sono sopra la media.
const numeri = [5, 10, 15, 20, 25];
// Media = 15 → Output atteso: 2 (20 e 25)


🧮 12. Somma delle cifre di un numero
Obiettivo: Sommare tutte le cifre di un numero (es: 472 → 4+7+2)
const numero = 472;
// Output atteso: 13



🔢 13. Trova il secondo numero più grande
Obiettivo: Trovare il secondo valore più grande in un array.
const numeri = [10, 40, 30, 20];
// Output atteso: 30


🧮 14. Conta la somma dei numeri dispari in un array misto
Obiettivo: Calcolare la somma solo dei numeri dispari in un array che contiene anche stringhe o altri tipi.
const dati = [3, "ciao", 4, true, 7, 2];
// Output atteso: 10 (3 + 7)


🔤 15. Trova la parola più lunga in un array di stringhe
Obiettivo: Restituire la stringa più lunga da un array.
const parole = ["sole", "albero", "casa", "elefante"];
// Output atteso: "elefante"


🔍 16. Verifica se un array è ordinato in modo crescente
Obiettivo: Controllare se i numeri sono in ordine crescente.
const numeri = [1, 2, 3, 4, 5]; // Output: true
const altri = [1, 3, 2]; // Output: false


🔢 17. Somma delle posizioni pari ma solo se il numero è dispari
Obiettivo: Sommare tutti i numeri che si trovano in posizione pari (0, 2, 4…) ma solo se il numero è dispari.
const arr = [1, 4, 3, 6, 5, 8]; 
// Posizioni pari: 1 (dispari), 3 (dispari), 5 (dispari) → Somma: 1 + 3 + 5 = 9
