//Declare variables
let sum = 0;
let count = 0;
let arrayNum = [];

//Asking user input
process.stdout.write("Enter number: ");


//Event listner for user input
process.stdin.on("data" , function(userInputFrom){

    let num = Number(userInputFrom.toString().trim());

    /*check the user input - IF it is number -
    1. Add them into array variable
    2. Keep ask the user input
    */
    if(isNaN(num) == false)
    {
        //Push numbers to array
        arrayNum.push(num);      

        //Keep asking user input
        process.stdout.write("Enter number (Enter String to stop): ");

        //The process.exit(); is in else loop. So exiting the process is skipped
        //Because of that this event listner KEEP LISTNING FOR INPUTS
        
    }

    /*check the user input - IF it is letter -
    1. Calculate Average - (Go through array elements -> Adding them into variable -> Divid by element count
    2. Print the result
    3. Stop the program*/
    else if(isNaN(num) == true) 
    {
        for (let x =0; x<=arrayNum.length-1; x++)
        {
        //Calculate total
        sum = sum + arrayNum[x];
        }

        //Get average by dividing element count
        let average = sum/arrayNum.length;

        //Printing the output
        console.log("Entered numbers are " , arrayNum);
        console.log("Sum is " , sum);
        console.log("Total numbers entered " , arrayNum.length);
        console.log("Average is " , average);

        //Exiting the process
        process.exit();

    }
    

});