

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