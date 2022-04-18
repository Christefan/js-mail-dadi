/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Genera il numero del giocatore da 1 a 6
const gambler = Math.floor(Math.random()*6) + 1;
console.log(gambler);

// Genera il numero del computer da 1 a 6
const computer = Math.floor(Math.random()*6) + 1;
console.log(computer);

let winner = "";

if (gambler > computer) {
    winner = 'Il vincitore è il Giocatore';
    console.log('Il vincitore è il Giocatore');
}   else if (computer > gambler) {
    winner = 'Il vincitore è il Computer';
    console.log('Il vincitore è il Computer');
}   else {
    winner = 'Pareggio!';
    console.log('Pareggio!');
}

// Stampo il vincitore
document.getElementById('outcome').innerHTML = winner;