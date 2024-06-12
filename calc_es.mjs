import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import { error } from 'console';

const ui = readline.createInterface({input, output});

function question(query) {
    return new Promise((resolve) => {
        ui.question(query, resolve);
    });
}

let answer = await ui.question('Enter a simple equation: ');

while (answer !== 'quit') {
    try {
        const result = eval(answer);
        console.log(result);
    } catch {
        console.log(error, answer + ' ' + 'is not a valid equation, please try again');
    }
    answer = await ui.question('Enter a simple equation: ');
}

ui.close();