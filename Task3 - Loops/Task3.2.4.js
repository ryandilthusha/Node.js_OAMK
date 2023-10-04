/* 
4.4 Task 4: toMixedCase() 
*/

//Ask user input
process.stdout.write("Please give a word: ");

//Get user input to Event Listner
process.stdin.on("data" , function (inputFromUser)
{
    //Get user input to a variable
    let name = inputFromUser.toString().trim();

    process.stdout.write("The word in MixCase is: ");

    for (let x = 0; x<=name.length-1; x++)
    {
        if (x%2 ==0)
        {
            process.stdout.write(name.charAt(x).toUpperCase());
        }
        else
        {
            process.stdout.write(name.charAt(x));
        }
        
    }

    //Exit the process
    process.exit();

});