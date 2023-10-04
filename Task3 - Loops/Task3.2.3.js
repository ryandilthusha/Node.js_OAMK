/* 
4.3 Task 3: Other way around
*/

//Ask user input
process.stdout.write("Please give a string: ");

//Get user input to Event Listner
process.stdin.on("data" , function (inputFromUser)
{
    //Get user input to a variable
    let name = inputFromUser.toString().trim();

    process.stdout.write("The word backward is: ");

    for (let x = name.length; x>=0; x--)
    {
        process.stdout.write(name.charAt(x))
    }

    //Exit the process
    process.exit();

});
