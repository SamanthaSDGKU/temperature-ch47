console.log("Calculator");

function calculate(){//begining of function

    //body of function
    var number1= Number(prompt("Enter the first number:"));
    var number2= Number(prompt("Enter the second number:"));

    var option = prompt("Enter the option: 1) Sum, 2) Sub");

    if(option == 1){
        console.log(number1+number2);// math operation
    }

    if(option == 2){
        console.log("Substraction result");
        console.log(number1-number2);
    }

}//end of calculate function