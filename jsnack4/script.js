//Snack 4°: Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

//Impletazione di variavile

let window_prompt = window.confirm('Inizia Premere Per Confermare di Andare Avanti nelle Operazione.');
const number_list_prompt = [];

//Implementazione di condizione e ciclo

for (let index = 0; index < 6; index++) {
    window_prompt = Number(window.prompt('Inserisci un numero per completare la sessione', ''));
    if (window_prompt % 2 === 0) {
        number_list_prompt.push(window_prompt);
    } else{
        window_prompt = window.alert("Mi dispiace non hai operato l'operazione con successo, quindi riprova l'operazione.")
    }
}

//Congratulazioni per l'utente
window.alert("Congratualzione hai completato l'operazione con successo, ottimo.");
console.log("Congratualzione hai completato l'operazione con successo, ottimo.");
console.log('Ecco la lista: ',  number_list_prompt.join('-'));
