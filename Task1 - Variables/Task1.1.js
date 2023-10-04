//1.1 Task 1: Number Guessing Game

process.stdout.write("This program is a computer game, Please type a number: ");

process.stdin.on("data", function(inputFromUSer)
{
    let userInput = inputFromUSer.toString().trim();
    process.stdout.write ("You typed in " + userInput + "\n");


    let myNumber = ++userInput;    
    process.stdout.write ("My number is " + myNumber);

    process.stdout.write ("\nSorry, you lost. I won. The game is over!");

    process.exit();

});