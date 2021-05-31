

// Mail
// Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.



// Chiedi all’utente la sua email

// var mailUtente = prompt('Inserisci la tua mail: ');


// var listaMail = ['marco@gmail.com' ,  'giovanni@gmail.com' , 'giacomo@gmail.com' , 'davide@gmail.com' , 'sara@gmail.com' ];


// //  2.  controlla che sia nella lista di chi può accedere,

// if (listaMail.includes(mailUtente)) {

// //  3.  stampa un messaggio appropriato sull’esito del controllo.
//         console.log('La tua mail e gia presente');

//     } else {

// //  3.  stampa un messaggio appropriato sull’esito del controllo.
//         listaMail.push(mailUtente);
//         console.log('La tua mail non e presente, e stata aggiunta');
// }

        


// Lista Cognomi:
// 1- chiedi all’utente il cognome
// 2- inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3- stampa la lista ordinata alfabeticamente
// 4- scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova



// 1- chiedi all’utente il cognome

var cognomeUtente = prompt('Inserisci il tuo cognome: ');

// 2- inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var listaCognomi = ['Bianchi' , 'Neri' , 'Rossi' , 'Verdi' , 'Gialli'];
listaCognomi.push(cognomeUtente);

// 3- stampa la lista ordinata alfabeticamente
listaCognomi.sort();



// 4- scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova


console.log(listaCognomi);