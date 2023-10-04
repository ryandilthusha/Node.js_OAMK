//Create empty array
let numArray = []

//Push numbers to array from 0-1000 -> We can push elements 1 by 1 using Loop
//But number should be random numbers -> So we also need to use Math Function

for (let x = 0; x<100; x++)
{
    numArray.push(Math.floor(Math.random()*1001));
}

//Now we successfully defined the array. So let's print it out in NUMERICAL order
console.log(numArray.sort((a, b) => a - b));
//          OR we can use
// console.log(numArray.sort(function(a, b) {return a - b }));



//Question 1) Find Largest value in the array using Loop

/*For this we have to compare array's 1st index with other all index
If the 2nd or next index is Large -> store it into variable*/
let largest = numArray[0]; //Assume 1st index is largest
for (let x=0; x<=100; x++)
{
    //We have to check 
    if(largest<numArray[x])  //Compare 1st index with other indexes
    {
        largest = numArray[x]
    }
    else if(largest>=numArray[x])
    {
        //Skip else
    }
}

console.log(largest);


//Question 2) Find Smallest value in the array using Loop

/*For this we have to compare array's 1st index with other all index
If the 2nd or next index is Small -> store it into variable*/
let smallest = numArray[0]; //Assume 1st index is largest
for (let x=0; x<=100; x++)
{
    //We have to check 
    if(smallest>numArray[x])  //Compare 1st index with other indexes
    {
        smallest = numArray[x]
    }
    else if(smallest>=numArray[x])
    {
        //Skip else
    }
}

console.log(smallest);

