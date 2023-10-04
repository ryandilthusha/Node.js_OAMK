/* 
3.4 Task 4: Multiplication Table
*/

const util = require("util");

//Ask user input
process.stdout.write("Please enter a number: ");

//Event Listner
process.stdin.on("data" , function(inputFromUser){

    //Taske user input to a variable
    let num = Number(inputFromUser);

    process.stdout.write(util.format("Multiplication table for %d\n",num));
    process.stdout.write("******************************************\n");

    let x= 0;
    while (x<=10)
    {
        let middle = util.format("%d x %d = %d",x,3,x*3);

        process.stdout.write("*" + middle.padStart(15).padEnd(20) + "*\n");
        
        x++;
    }

    //Exiting the process
    process.exit();


});