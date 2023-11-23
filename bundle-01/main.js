/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

/* Ciclo for non corretto,variabile contatore "i", l'errore è presente nella condizione ( i > 5 ). la correzzione corretta è la seguente: for ( let i = 0; i < 5 ; i++); poichè il ciclo deve essere eseguito correttamente fino al numero 4 quindi nell'intervallo 0-4 */


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

/* Il codice nella condizione if ha solamente un operatore di uguaglianza assegnandone il suo relativo valore, invece noi come da esempio scritto dobbiamo ottenere un confronto e quindi dobbiamo utilizzare una funzione comparativa NUM %2 === 0 (perchè chiediamo di dividere il numero per 2 se il resto è 0 allora facciamo il return di num+5, ma il nostro scopo è vedere se il resto è uguale a 0)
La soluzione finale è questa, per essere corretta la funzione bisogna salvarla in una variabile al di fuori di essa :


function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

*/




ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]