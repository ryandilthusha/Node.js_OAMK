/* 
4.1 Task 1: Multiplication Tables 2
*/


const util = require("util");

//1st Loop for Print Main Multiplication Table figures
for(let x = 1; x<=10; x++)
{
    process.stdout.write("\nMultiplication table for " + x)
    process.stdout.write("\n*******************************\n");

    for(let y = 1; y<=10; y++)
    {
        let middle = util.format("%d x %d = %d" , y , x , y*y)

        process.stdout.write("*" + middle.padStart(15).padEnd(20) + "*\n");
    }
}