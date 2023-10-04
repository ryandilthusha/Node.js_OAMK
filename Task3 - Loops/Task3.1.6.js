/* 
3.6 Task 6: Palindrome
*/

//Ask user input
process.stdout.write("Enter any string to check Palindrome: ")

//Event Listner
process.stdin.on("data" , function(inputFromUser){

    //Store string into variable
    let name = inputFromUser.toString().trim();

    let allMatch = true;

    let x = 0

    while ( x<=name.length-1 && allMatch)
    {
        if (name.charAt(x) != name.charAt(name.length-1 -x))
        {
            allMatch = false;
            break;
        }
        
        x = x + 1

    }

    if (allMatch == true)
    {
        process.stdout.write("This is Palindrome");
    }

    else
    {
        process.stdout.write("This is not a Palindrome");
    }


    //Exiting the process
    process.exit();


});