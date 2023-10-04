// Initialize an empty array
let numbers = [];

// Initialize a variable for user input
let userInput;

// Use Node's standard input/output to interact with the user
process.stdout.write("Enter a number (0 to stop): ");

process.stdin.on("data", function(inputFromUser) {
    // Convert the input to a number
    userInput = parseInt(inputFromUser);

    // If user enters 0, stop taking input and print numbers in reverse
    if (userInput === 0) {
        // Print the numbers in reverse order
        for(let i = numbers.length - 1; i >= 0; i--) {
            process.stdout.write(numbers[i].toString() + " ");
        }

        // Exit the process
        process.exit();
    } else {
        // If the input is not 0, store it in the array
        numbers.push(userInput);
    }

    // Ask the user for the next number
    process.stdout.write("Enter another number (0 to stop): ");
});
