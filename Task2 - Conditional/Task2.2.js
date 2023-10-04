//Asking for 3 user inputs
process.stdout.write("Give 3 numbers as input seperated by space each: ");

//Process that input into event listner
process.stdin.on("data" , function(inputFromUser)
{
    //Read the user input into variable
    //Now the "numbers" variable have 3 inpurs as an array
    let numbers = inputFromUser.toString().trim().split(" ");

    //Get 1st index number into variable
    let num1 = Number(numbers[0]);
    //Get 1st index number into variable
    let num2 = Number(numbers[1]);
    //Get 1st index number into variable
    let num3 = Number(numbers[2]);

    //If else conditions
    if(num1>(num2&&num3))
    {
        process.stdout.write("The largest number is: " + num1 + "\n");
    }
    else if (num2>(num1&&num3))
    {
        process.stdout.write("The largest number is: " + num2 + "\n"); 
    }
    else if (num3>(num1&&num2))
    {
        process.stdout.write("The largest number is: " + num3 + "\n");
    }


    //Exit the process
    process.exit();

});