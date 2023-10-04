//1.4 Task 4: Basic Calculations

//Ask user input
process.stdout.write("Please enter a number: ");

//Input process
process.stdin.on("data", function(inputFromUser)
{
    let userNum = parseInt(inputFromUser);
    let secretNum = 12;

    //Addtion 
    let addNum = userNum + secretNum;

    //Substraction
    let minNum = userNum - secretNum;

    //Multiplication
    let mulNum = userNum * secretNum;

    //Division
    let divNum = userNum / secretNum;

    //Modulous
    let modNum = userNum % secretNum;

    //1 Add
    let add1Num = ++userNum;

    //1 Sub
    let min1Num = --userNum;

    //Output Write
    process.stdout.write("" + userNum + " + " +  secretNum + " = " + addNum + "\n");

    process.stdout.write("" + userNum + " - " +  secretNum + " = " + minNum + "\n");

    process.stdout.write("" + userNum + " * " +  secretNum + " = " + mulNum + "\n");

    process.stdout.write("" + userNum + " / " +  secretNum + " = " + divNum + "\n");

    process.stdout.write("" + userNum + " % " +  secretNum + " = " + modNum + "\n");

    process.stdout.write("" + userNum + "++ " + " = " + add1Num + "\n");

    process.stdout.write("" + userNum + "-- " + " = " + min1Num + "\n");

    process.exit();

});