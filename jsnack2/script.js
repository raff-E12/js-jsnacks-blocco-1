//Snack 2°: L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Prompt Del Utente

const Word_1 = window.prompt('Inserisci la prima parola:', "");
const Word_2 = window.prompt('Inserisci la seconda parola:', "");

//Condizione di Risoluzione

if (Word_1.length < Word_2.length) {
   console.log(`La prima parola è più lunga di ${Word_1}`);
} else if(Word_1.length > Word_2.length){
   console.log(`La seconda parola è più lunga di ${Word_2}`);
} else{
    console.log('Mi dispiace ma non hai inserito niente.');
}

console.log('fine del secondo esercizio.');