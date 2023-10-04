//1.3 Task 3: Distance Converter version 0.2


const util = require ( "util");

console.log("This program converts meters to other units of distance.");

//Ask for user input
process.stdout.write("Please, give distance in meters: ");

//Input process
process.stdin.on("data", function(inputFromUser)
{    
    //Store the input into a variable
    let meterDistance = inputFromUser.toString().trim();

    //calculation
    let kilometerDis = meterDistance*0.001;
    let mileDis = meterDistance*0.000621371;    
    let yardDis = meterDistance*1.09361;
    let feetDis = meterDistance*3.28084;
    let inchDis = meterDistance*39.3701;
    let lightyrDis = meterDistance*0.00000000000000011;
    
    process.stdout.write(util.format("\n%d meter is:\n\n%d kilometers\n%d miles\n%d yards\n%d feet\n%d inches\n%d light years",meterDistance,kilometerDis.toFixed(3),mileDis.toFixed(3),yardDis.toFixed(2),feetDis.toFixed(3),inchDis.toFixed(3),lightyrDis.toFixed(3)));

    process.exit();

});

// How to use padStart() function to add empty spaces to make the string equal length
//Output doesn't have trailing zeros (0).

