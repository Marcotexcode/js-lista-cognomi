

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
var posizione;

// 2- inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var listaCognomi = ['Bianchi' , 'Neri' , 'Rossi' , 'Verdi' , 'Gialli'];

listaCognomi.push(cognomeUtente);

// 3- stampa la lista ordinata alfabeticamente
listaCognomi.sort();



for(var i = 0; i < listaCognomi.length; i++){

    console.log(listaCognomi[i]);

    // 4- scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
    if(listaCognomi[i] === cognomeUtente) {

        posizione = i + 1;

    }
}

console.log(posizione + ' ' + cognomeUtente);


// seconda soluzione

var i =  0;

while(cognomeUtente  != listaCognomi[i]){

    i++;

}

console.log(++i + ' ' + cognomeUtente);

// Spiegazione nell ultimo for per poter stampare il cognome il numero di dove e messo il cognome messo dall' utente devo dire nell if che nella listaCognomi[i] diventa uguale a cognomeUtente
// devo creare una variabile in cui gli viene dato il risultato dell if che sarebbe il dato della i quando diventa uguale all cognomeUtente il +1 serve per non farlo partire da 0 ma farlo partire 
// direttamente da 1.