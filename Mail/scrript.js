/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

/*Lista di e-mail registrati*/
const autorized = ['prova1@gmail.com', 'prova2@gmail.com'];

/*Utente inserisce la propria e-mail*/
const email = prompt('Inserisci la tua email');
console.log(email);

let check='';
/*Ricerca e-mail corrispondente all'interno della lista*/
for (i = 0; i < autorized.length; i++){
  if(email === autorized[i]) {
    check='Trovato';
  }
}
/*Stampa la ricerca*/
if(check === 'Trovato'){
  document.getElementById('e-mail').innerHTML = 'Benvenuto';
  console.log('Benvenuto');
}else{
  document.getElementById('e-mail').innerHTML = 'Non sei registrato';
  console.log('Non sei registrato');
}