//Snack 3°: Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

//Campo di Richiesta per l'utente
let Words_Prompts = window.confirm("Sei Pronto per continuare, clicca 'ok' per continuare.");

//Ciclo di richiesta del esercizio

for (let index = 0; index < 10; index++) {
    Words_Prompts = window.prompt(`Inserisci la parola a piacere per continuare, parole inserite: ${index}`, '');
    window.alert('La parola che hai inserito è  ' + Words_Prompts);
}

//Congratulazioni con l'utente
    console.log('Ottimo lavoro hai completato con successi il passagio');
    window.alert('Ottimo hai completato il passio con successo');