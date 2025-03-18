// definisco le variabili
let sequence = '';
let sequenceLength = 100;
let value = 1;

// inizio un ciclo per stampare 100 stringhe
// che abbiano il valore della loro posizione
for (i = 1; i <= sequenceLength; i++) {

    sequence += `${value++} `;
    if ((value % 3) == 0) {
        sequence += 'Fizz ';
    } else if ((value % 5) == 0) {
        sequence += 'Buzz ';
    }
}
console.log(sequence);