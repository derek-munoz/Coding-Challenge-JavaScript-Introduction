// very easy challenge
//Create two variables and assign a number to each. Console log the difference between the numbers.
var num1 = 2;
var num2 = 5;
console.log(`The diffrence between ${num1} and ${num2} is ${num1-num2}`);
// easy challenge
//Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters
var name1 = "Bartholomew";
var name2 = "Theodore";
if( name1.length < name2.length){
    console.log(`The name ${name2} is longer than ${name1} by ${name2.length - name1.length}`);
}
else if(name1.length > name2.length){
    console.log(`The name ${name1} is longer than ${name2} by ${name1.length - name2.length}`);
}
else{
    console.log(`The name ${name1} is the same length as ${name2}`);
}
//medium challange
//Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
// Took a more creative look at how log if user is shouting or whispering or neither
var shoutOrWhisp = prompt("Tell me something");
if( shoutOrWhisp === shoutOrWhisp.toUpperCase()){
    console.log(`Why are you shouting!!`);
}
else if ( shoutOrWhisp === shoutOrWhisp.toLowerCase()){
    console.log(`Speak up, I can't hear you.`);
}
else{
    console.log(`Thanks for letting me know.`);
}
//hard challange
//Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.
function add(p1,p2){
    return p1 + p2;
}
function subtract(p1,p2){
    return p1 - p2;
}
function divide(p1,p2){
    return p1 / p2;
}
function multiply(p1,p2){
    return p1 * p2;
}
//very hard
//Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /), and another number, and then uses the functions created in the hard challenge to output the value in sentence form.
var calc1 = prompt("Enter 1st number");
var oprtr = prompt("Enter operator: either +, -, * or /")
var calc2 = prompt("Enter 2nd number");
var x = parseInt(calc1);
var y = parseInt(calc2)

if(oprtr === '+'){
    console.log(`${calc1} ${oprtr} ${calc2} = ${add(x,y)}`);
}
else if(oprtr === '-'){
    console.log(`${calc1} ${oprtr} ${calc2} = ${subtract(calc1,calc2)}`);
}
else if(oprtr === '/'){
    console.log(`${calc1} ${oprtr} ${calc2} = ${divide(calc1,calc2)}`);
}
else if(oprtr === '*'){
    console.log(`${calc1} ${oprtr} ${calc2} = ${multiply(calc1,calc2)}`);
}
else{
    console.log(`Invalid operator`);
}