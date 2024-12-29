//Syntax of switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

switch (4) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Enter a valid day no.");
        
        break;
}
//if we dont use break then it will execute all code after matches case except default