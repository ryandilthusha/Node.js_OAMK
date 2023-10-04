// Asking user to enter two numbers separated by a space.
process.stdout.write("Please enter 2 numbers separated by a single space character: ");

// This event listner is triggered when the user enters the data.
process.stdin.on("data", function(inputFromUser) 
{
    // Convert the entered data into a string and split() it using the space character. 
    // This will create an array where the first element is the first number and the second element is the second number.
    let nums = inputFromUser.toString().trim().split(" ");

    // Convert the entered numbers into integers for comparison.
    let firstNum = Number(nums[0]);
    let secondNum = Number(nums[1]);

    // Compare the two numbers and output the result.
    if (firstNum > secondNum) {
        process.stdout.write("The largest number is:" + firstNum + '\n');
    } else if (secondNum > firstNum) {
        process.stdout.write("The largest number is:" + secondNum + '\n');
    } else {
        process.stdout.write("Both numbers are equal!!!");
    }

    // Exit the program.
    process.exit();
});
