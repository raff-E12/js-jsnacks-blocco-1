//Snack 1° : L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const Number_1 = Number(window.prompt('Scegli il tuo primo numero?', ''));
const Number_2 = Number( window.prompt('scegli il tuo secondo numero', ''));

if (isNaN(Number_1)  < isNaN(Number_2)) {
    console.log("Il numero che hai scelto è maggiore del'altro");
} else {
    console.log("Il numero che hai scelto è minore del'altro");
}

//ecco la  soluzione del mio problema