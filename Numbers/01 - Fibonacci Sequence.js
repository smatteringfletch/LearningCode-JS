/*
Exercise inspired from:
    https://github.com/karan/Projects
    Fibonacci Sequence - Enter a number and have the program generate the Fibonacci sequence to that number or to the Nth number.
 */

fibonacciSequence();

function fibonacciSequence() {
    // Initial values of the sequence, along with our temp variable
    n1 = 0;
    n2 = 1;
    var temp;

    const readline = require('node:readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('How many iterations of the Fibonacci Sequence should we print? ', iterations =>{
        // Define an empty array to store all values
        const fibArray = [];
        // Add values to the array in order
        for (i = 0; i < iterations; i++) {
            fibArray[i] = n1;
            temp = n1 + n2;
            n2 = n1;
            n1 = temp;
            rl.close();
        }
        // Print the array
        console.log(fibArray);
    });
}