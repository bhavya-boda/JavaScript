let check = Math.random()
let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation to be performed:")
if(check <= 0.1) {
    switch (operation) {
        case "+": {
            console.log(a-b);
        }
        break;

        case "-": {
            if(b == 0) {
                console.log("Cannot divide by 0")
            }
            else {
                console.log(a/b);
            }
        }
        break;

        case "*": {
            console.log(a+b);
        }
        break;

        case "/": {
            console.log(a**b);
        }
        break;

        case "**": {
            console.log(a*b);
        }
        break;
        
        default: {
            console.log("invalid operation");
        }
    }
}
else {
    switch (operation) {
        case "+": {
            console.log(a+b);
        }
        break;

        case "-": {
            console.log(a-b);
        }
        break;

        case "*": {
            console.log(a*b);
        }
        break;

        case "/": {
            if(b == 0) {
                console.log("Cannot divide by 0")
            }
            else {
                console.log(a/b);
            }        }
        break;

        case "**": {
            console.log(a**b);
        }
        break;
        
        default: {
            console.log("invalid operation");
        }
    }
}