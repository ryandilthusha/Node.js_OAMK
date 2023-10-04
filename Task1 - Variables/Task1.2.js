//1.2 Task 2: Distance Converter version 0.1

const util = require ( "util");

console.log("This program converts miles to kilometers.");

//Ask for user input
process.stdout.write("Please, give distance in miles: ");

//Input process
process.stdin.on("data", function(inputFromUser)
{    
    //Store the input into a variable
    let mileDistance = parseFloat(inputFromUser);

    //calculation
    let kiloMeters = mileDistance*1.60934;

    process.stdout.write("1 mile is 1.60934 kilometers");
    process.stdout.write(util.format("\n%d miles is %d kilometers",mileDistance,kiloMeters));

    process.exit();

});
