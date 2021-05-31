

// Mail
// Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.



// Chiedi all’utente la sua email

    var mailUtente = prompt('Inserisci la tua mail: ');


    var listaMail = ['marco@gmail.com' ,  'giovanni@gmail.com' , 'giacomo@gmail.com' , 'davide@gmail.com' , 'sara@gmail.com' ];


// //  2.  controlla che sia nella lista di chi può accedere,

    if (listaMail.includes(mailUtente)) {

// //  3.  stampa un messaggio appropriato sull’esito del controllo.
        console.log('La tua mail e gia presente');

    } else {

// //  3.  stampa un messaggio appropriato sull’esito del controllo.
        listaMail.push(mailUtente);
        console.log('La tua mail non e presente, e stata aggiunta');
}

        





