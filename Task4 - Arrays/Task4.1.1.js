//Defining the arrays
let intArray = [5,7,32,31,8]; //The integer array with 5 items
let floatArray = [12.4,13.55,67.44]; //The double array with three items
let stringArray = ["Helsinki","Lissabon","New York","Shanghai"]; //The string array with 4 items

//Question 1) 
console.log("The value in the index number 3 is: ",stringArray[3]);

//Question 2) 
console.log("The fourth item in the int array is: ",intArray[3]);

//Question 3) 
console.log("“In the double array there are", floatArray.length, " items");

//Question 4) 
console.log("Integer array contents: ")
for (let x = 0; x<=intArray.length - 1; x++)
{
    console.log(intArray[x]);
}

//Question 5) 
console.log("Float array contents: ")
for (let x = floatArray.length - 1; x>=0; x--)
{
    console.log(floatArray[x]);
}

//Question 6) 
for (let x = 0; x<=stringArray.length - 1; x++)
{
    stringArray[x]="empty";
}
process.stdout.write("New string array: " + stringArray.join(" , "));