process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    if(input === 'exit') {
        process.exit(0);
    }
    try {
        const result = eval(input);
        console.log(result);
    }catch(e) {
        console.log(e, 'what should I do?');
    }
});

process.stdout.write('Do some math: ');
