//Ask user for 3 inputs
process.stdout.write("Please give 3 numbers seperated with spaces: ");

//Event Listner
process.stdin.on("data" , function(inputFromUser)
{
    //Store the user input into variable and split them to 3 indexes
    let nums = inputFromUser.toString().trim().split(" ");

    //store 3 indexes into 3 variables
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    let num3 = Number(nums[2]);

    //If Else condition

    //If any of the numbers is 2
    if ((num1 == 2) || (num2 ==2) || (num3 ==2))
    {
        process.stdout.write("You entered the magic number 2!");
    }
    //If all three numbers are equal
    else if ((num1 == num2) && (num2== num3))
    {
        process.stdout.write("You entered 3 matching numbers");
    }
    //If all three numbers are different 
    else if ((num1 != num2) && (num2 != num3) && (num1 != num3))
    {
        process.stdout.write("You entered 3 different numbers");
    }
    //If first two are the same, but the third one is different
    else if ((num1 == num2) && (num1!=num3))
    {
        process.stdout.write("Third one doesn’t fit");
    }    

    //Exit the process
    process.exit();


});