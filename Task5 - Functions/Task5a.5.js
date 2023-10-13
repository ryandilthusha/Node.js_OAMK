//Asking for user input
process.stdout.write("Please enter a string: ");

//Event Listner for the input
process.stdin.on("data" , function (inputFromUser)
{

    //Store input in a variable
    let userInput = inputFromUser.toString().trim();

    //Call the 1st Function to answer Question 1
    let result1 = replaceSmileys(userInput); //Save the function Return value into a variable
    console.log("Replaced Text: "+ result1);  //Print the result

    //Call the 2nd Function to answer Question 2
    let result2 = replaceSmileysWithReplacer(userInput,"*"); //Save the function Return value into a variable
    console.log("Replaced Text: "+ result2);  //Print the result



    //Exit the process
    process.exit();

});


//=================FUNCTIONS PART===========================
//Function 1
function replaceSmileys(text1)
{
    let newUserInput = text1.replace(":)" , "*smile*"); //The original text's :) -> *smile* and save as "new text"
    newUserInput = newUserInput.replace(":(" , "*sad*"); //The new text's :( -> *sad* and save again as "new text"
    return newUserInput; //returning the final "new text"
}

//Function 2
function replaceSmileysWithReplacer(text2,replacer)
{
    let newUserInput = text2.replace(":)" , replacer); //The original text's :) -> *smile* and save as "new text"
    newUserInput = newUserInput.replace(":(" , replacer); //The new text's :( -> *sad* and save again as "new text"
    return newUserInput; //returning the final "new text"
}