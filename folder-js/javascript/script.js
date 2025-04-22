// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!
// 

 const accessMail = ["pippo@gmail.com", "paperino@gmail.com", "topolino@disneym.com"]
 const mailUser = prompt("Inserisci qui la tua mail");
 let mailCheck = false;

  for (let i = 0; i < accessMail.length && mailCheck === false ; i++) {
     if (accessMail[i] === mailUser) {
       mailCheck = true;
       break;
     }
   }
//   console.log(mailCheck); da attivare se si vuole vedere il true or false

  if(mailCheck){
     console.log("Accesso consentito")
  }else{
     console.log("Accesso negato")
  } 


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
const diceNum1 = Math.floor(Math.random()*6 +1);
const diceNum2 = Math.floor(Math.random()*6 +1);
console.log(diceNum1);
console.log(diceNum2);

if(diceNum1 > diceNum2){
    console.log("Il vincitore è il giocatore 1")
}else if (diceNum1 < diceNum2){
    console.log("Il vincitore è il giocatore 2")

}else{
    console.log("Abbiamo un pareggio!!")
}