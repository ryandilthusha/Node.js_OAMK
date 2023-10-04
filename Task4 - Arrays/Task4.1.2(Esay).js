//Declare empty variable
let numArray = [];

//Asking user to input numbers
process.stdout.write("Enter a number: ");

//Event Listner for user input
process.stdin.on("data" , function(inputFromUser){

    //store input into variable
    let num = Number(inputFromUser.toString().trim());

    /*Check user Input - IF input is number -> 
    1. Push input into array
    2. Keep asking user input*/
    if(num != 0)
    {
        //Push input into array
        numArray.push(num);

        //Asking user input again
        process.stdout.write("Enter a number (enter 0 to stop): ");

        //The process.exit(); is in else loop. So exiting the process is skipped
        //Because of that this event listner KEEP LISTNING FOR INPUTS;
    }

    /*Check user Input - IF input is 0 -> 
    1. Push 0 into array
    2. Print the Array in reverse order with Loop
    3. Exit the process*/
    else if (num ==0)
    {
        //Push the 0 also into the array
        numArray.push(num);

        //Print the Array in reverse order with Loop
        process.stdout.write("\nReverse Order: ")
        for(let x=numArray.length-1; x>=0; x--)
        {
            process.stdout.write(numArray[x].toString() + " ");
        }

        //Exit the process
        process.exit();

    }


});