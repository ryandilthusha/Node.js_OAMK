//Array with pre-defined items
let numArray = [55,23,6456,324,21,234,72,21];

//Asking user input
process.stdout.write("Enter the number you want to search: ");

//Event Listner for user input
process.stdin.on("data" , function(inputFromUser){

    //Store input into variable
    let userNum = Number(inputFromUser.toString().trim());

    //Define boolean variable (This is useful to flag(notify) when item is found)
    let isFound = false;
    
    /*We need to check every element in array to check whether it matches with user input
    To check this we have to go through every element of array
    This can be done by Loop
    */
    for(let x=0; x<=numArray.length-1; x++)
    {        
        /*Check condition -> IF User Input exsist in Array
        1. Print the result
        2. Notify program when item is Found*/
        if (numArray[x]==userNum && isFound == false)
        {
            process.stdout.write("The number " + userNum +  " is at index " + x);
            isFound = true;            
        }  
        
        else if (numArray[x]!=userNum && isFound == false)
        {
            //Keep continue the loop until go through every element of the array
        }
        
    }

    //If the user input still "NotFound" after go through entire loop -> Print Not Found
    if (isFound == false)
    {
        process.stdout.write("The number is not found");
    }

    //Exit the process
    process.exit();

});