

// Lista Cognomi:
// 1- chiedi all’utente il cognome
// 2- inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3- stampa la lista ordinata alfabeticamente
// 4- scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

// 1- chiedi all’utente il cognome

var cognomeUtente = capitalizeFirstLetter(prompt('Inserisci il tuo cognome: '));
var posizione = false;

// 2- inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var listaCognomi = ['Bianchi' , 'Neri' , 'Rossi' , 'Verdi' , 'Gialli'];
listaCognomi.push(cognomeUtente);

// 3- stampa la lista ordinata alfabeticamente
listaCognomi.sort();



for(var i = 0; i < listaCognomi.length; i++){
    console.log(listaCognomi[i]);
}

// 4- scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

for(var i = 0; i < listaCognomi.length; i++){
    if(listaCognomi[i] === cognomeUtente) {
        posizione = i + 1;
    }
}

console.log(posizione + ' ' + cognomeUtente);

