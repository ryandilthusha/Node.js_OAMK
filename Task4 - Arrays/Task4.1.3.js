// Initialize variables for the running total and the count of numbers
let total = 0;
let count = 0;

// Use Node's standard input/output to interact with the user
process.stdout.write("Enter a number (enter a letter to stop): ");

process.stdin.on("data", function(inputFromUser) {
    // Remove any trailing whitespace from the input
    let userInput = inputFromUser.toString().trim();

    // Check if the user input is a number
    if (isNaN(userInput)) 
    {
        // If the input is not a number, compute and display the average
        let average = total / count;
        process.stdout.write("Average of the entered numbers is: " + average);
        
        // Exit the process
        process.exit();
    } 
    else 
    {
        
        // If the input is a number, add it to the total and increment the count     
        total = total + parseFloat(userInput);
        count = count + 1;

        // Ask the user for the next number
        process.stdout.write("Enter another number (enter a letter to stop): ");
    }
});
