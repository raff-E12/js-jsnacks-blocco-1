//Snack 1° : L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const Number_1 = Number(window.prompt('Scegli il tuo primo numero?', ''));
const Number_2 = Number( window.prompt('scegli il tuo secondo numero', ''));

if (isNaN(Number_1) < isNaN(Number_2)) {
    console.log(`Il numero è maggiore di ${Number_1}`);
} else if(isNaN(Number_1) > isNaN(Number_2)) {
    console.log(`Il numero è maggiore di ${Number_2}`);
} else{
    console.log('Riprova ad inserire i numeri in maniera giusta.');
}

//ecco la  soluzione del mio problema