const { error } = require('console');
const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function question() {
    interface.question('Enter a simple equation: ', (input) => {
        if (input === 'quit') {
            interface.close();
        } else {
            try {
                const result = eval(input);
                console.log(result);
            } catch {
                console.log(error, input + ' ' + 'is not a valid equation');
            }
            question();
        }
    });
}

question();