/* 
3.5 Task 5: Countdown
*/

const util = require("util");

process.stdout.write("10 seconds for igniation.. Starting...\n");

let x = 10;
while (x>=0)
{    

    process.stdout.write(util.format(".. %d ..\n",x));
    x--;
}

process.stdout.write("IGNIATION!!!");