//Asking user input 1
process.stdout.write("Are you younger than 18? (Y or N): ");

//Event Listner
process.stdin.on("data", function(inputFromUser)
{
    //Store the user input into variable
    let answer1 = inputFromUser.toString().trim();
    
    //If else condition
    if (answer1 == "Yes"|| answer1 == "YES"|| answer1 == "Y")
    {
        process.stdout.write("You are too small");
    }
    else if (answer1 == "No"|| answer1 == "NO"|| answer1 == "N")
    {
        process.stdout.write("You are old");
    }
    else
    {
        process.stdout.write(answer1 + " is not a valid input");
    }
    //Exit the process
    process.exit();

});