/* 
4.2 Task 2: Triangle
*/


//Ask input from user
process.stdout.write("Please enter size of the triangle: ");

//Event Listner for the input
process.stdin.on("data" , function(inputFromUser){

    let size = Number(inputFromUser);

    // Outer loop: Controls the number of rows of the triangle, based on the size provided by the user
    for (let x = 1; x<=size; x++)
    {

        // Inner loop: Controls the number of '*' printed on each row
        for (let y = 1; y<=x; y++)
        {
            process.stdout.write("*");
        }

        // Move to the next line after printing '*' for the current row
        process.stdout.write ("\n");
    }

    //Exit the process
    process.exit();

});
