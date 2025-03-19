// definisco le variabili
const sequenceLength = 100;
let sequence = '';

// inizio un ciclo per stampare 100 stringhe
// che abbiano il valore della loro posizione
for (let value = 1; value <= sequenceLength; value++) {
    if (value % 15 === 0) {
        sequence += 'FizzBuzz ';
    } else if (value % 3 === 0) {
        sequence += 'Fizz ';
    } else if (value % 5 === 0) {
        sequence += 'Buzz ';
    } else {
        sequence += `${value} `;
    }
}

console.log(sequence);