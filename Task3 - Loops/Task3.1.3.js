/* 
3.3 Task 3: Looping through Strings
*/

//Ask user input
process.stdout.write("Enter your name: ");

//Event Listner to the given input
process.stdin.on("data" , function(inputFromUser){

    //Store into a variable
    let name = inputFromUser.toString().trim();

    //Loop
    let x = 0;
    while (x < name.length)
    {
        process.stdout.write(x + 1 + ". character is " + name.charAt(x) + ".\n");

        x++;
    }
    
    //Exit the process
    process.exit();
});