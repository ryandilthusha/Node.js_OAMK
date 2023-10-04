//Ask user input
process.stdout.write("Please select your option\n 1 - Print Hello\n 2 - Print current date\n 3 - Exit the programe\n: ");

//Event listner
process.stdin.on("data" , function(inputFromUser)
{
    let option = Number(inputFromUser);

    switch (option)
    {
        case 1:
            process.stdout.write("Hello");
            break;
        case 2:
            process.stdout.write("11/09/2023");
            break;
        case 3:
            process.stdout.write("Exiting....");
            break;
        default:
            process.stdout.write("Invalid option");
    }

    process.exit();

});







