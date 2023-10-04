function highestAndLowest(array) 
{   
    //Declare variable to get Highest value. We assume 1st element is the Highest
    let highest = array[0];
    //Loop through each element in Array and find the Highest
    for(let x=0; x<=array.length-1; x++)
    {
        //If Looping index greater than current Highest -> Declare looping index as the Highest
        if(highest<=array[x])
        {
            highest = array[x];
        }

        //Else the current Highest is highest value -> Don't do anything
        else if (highest>array[x])
        {
            
        }
    }

    //Declare variable to get Lowest value. We assume 1st element is the Highest
    let lowest = array[0];
    //Loop through each element in Array and find the Highest
    for(let x=0; x<=array.length-1; x++)
    {
        //If Looping index greater than current Highest -> Declare looping index as the Highest
        if(lowest>=array[x])
        {
            lowest = array[x];
        }

        //Else the current Highest is highest value -> Don't do anything
        else if (lowest<array[x])
        {
            
        }
    }


    //Print out the highest value after the loop
    console.log(highest + " is highest and " + lowest + " is lowest");
}



let numbers = [1,5,1, 5, 10, 12, 44];
highestAndLowest(numbers);