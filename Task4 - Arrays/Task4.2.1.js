let battleArray = [
    ["*","*","*","*","-"],
    ["-","-","-","-","-"],
    ["-","-","-","-","-"],
    ["-","-","-","-","*"],
    ["-","-","-","-","*"]
]

console.log(battleArray);


//Ask user input
process.stdout.write("Give 2 number of coordinates (seperate by space): ");

//Declare empty array for user inputs
let coordinateArray = [];
let count = 0;

//Event Listner for user input
process.stdin.on("data" , function(inputFromUser){

    //Get input to variable
    let numUser = inputFromUser.toString().trim().split(" ");

    //Store coordinates seperately
    let num1 = Number(numUser[0]);
    let num2 = Number(numUser[1]);
    
    


    //If coordinates Hit on Ship
    if (battleArray[num1][num2] == "*")
    {
        //Tell success
        console.log("You hit on a ship");
        //Mark the coordinates on map
        battleArray[num1][num2] = "X";
    }

    //If coordinates Hit on Sea
    else if (battleArray[num1][num2] == "-")
    {
        //Tell success
        console.log("You missed");
        //Mark the coordinates on map
        battleArray[num1][num2] = "X";
    }

    //To check is there any ship left -> By using Loop. We accessing each element and check if they ship or not
    let isFound = false;
    for(let x=0; x<=battleArray.length-1; x++)
    {
        for(let j=0; j<=battleArray.length-1; j++)
        {
            //If ship is exit at the coordinate -> Tell program by flaging True
            if(battleArray[x][j]=="*" && isFound==false)
            {
                //console.log("More Ships Left");
                isFound = true;
            }

            //If ship is not exit at the coordinate -> continue the loop
            else
            {
                //No response
            }
        }
    }

    //IF there are more ships (isFound = True) -> Ask user input again
    if (isFound==true)
    {
        //Ask again user input
        process.stdout.write("Give 2 number of coordinates (seperate by space): ");
    }

    //IF there are no ships (isFound = True) -> Exit the process
    else if (isFound==false)
    {
        //Print the message
        console.log("No ships Left");

        //View the Map
        console.log(battleArray);
        
        //Exit the process
        process.exit();
    }    

});