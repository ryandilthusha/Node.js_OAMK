//Function for Printing Letters
function printLetters()
{
    for (let x =10; x<36; x++)
    {
        process.stdout.write(x.toString(36));
        //x.toString(36) converts the number x to its base-36 string representation
        //For x = 10, the base-36 representation is a.
        //For x = 11, the base-36 representation is b.
    }
}

//Function for Printing Numbers
function printNumbers()
{
    for (let x =1; x<11; x++)
    {
        process.stdout.write(x.toString());
    }
}

//Calling Functions
printLetters();
process.stdout.write("\n");
printNumbers();
process.stdout.write("\n");
printLetters();