let fname = "Rajabu";
// fname = 80  This result to Error in Typescript

// Specifying the type of variable

// String data type
let jina : String;
jina = "Rajabu Masiki";

console.log(jina.toUpperCase());

// Number data type
let age: number;
age = 60;
age = 90.5;
console.log("age = ",age);


// Boolean data type

let validity : boolean;
validity = true;
console.log("validity ", validity);

// How to Typecasting

let result = age + parseFloat("5.5") + parseInt("4");
console.log("result = ",result);

// Array data Type

let students : Array<String> = ["Zainabu","Steven","Emmanuel","Sumaiya"];
let employees : String [] = ['Masiki', 'Rajabu', 'Mohamedi'];

let numList : Array<number> = [1,2,3,4,5,6,7,8,9,0,];

// Filter Function

let numGreater2 = numList.filter((num)=> num >= 2);
console.log("numGreater2 = ",numGreater2);

// Find Function
let numEqual2 = numList.find((num2)=>num2 === 2);
console.log("numEqual2 = ",numEqual2);

let names = students.find((name)=> name==='Zainabu');
console.log("names = ",names);

// Sum Function

let sums = numList.reduce((acc,num)=> acc + num);
console.log("Sum = ",sums);

// Enum Data Type
 
enum Drinks {
    Mirinda,
    Fanta,
    Pepsi,
    Cocacola,
    Sprite,
    SevenUp
}

let drink : Drinks = Drinks.Fanta;
console.log("favourite Drink is ",Drinks[drink]);

// Tuple data Type

let tuples : [number, number];

function swapNumbers(num1: number,num2: number):[number, number]{
    return [num2, num1];
}
tuples = swapNumbers(10,20)
console.log("num1 = ", tuples[0]);
console.log("num2 = ", tuples[1]);


// Any data Type
let something : any;
something = "Rajabu R. Masiki";
something = 90;
something = true;
console.log("something = ",something);

// Functions

function addition(a:number,b:number){
    return a+b;
}
console.log("Summation = ",addition(80,20));
 
const sub = ((num1:number,num2:number)=> num2 -num1);
console.log("Substraction = ", sub(10,7));

const mult = function(num1:number, num2:number) {
 return num1 * num2
}
console.log("Multiplication = ",mult(6,4));

// Void data type

function myvoid(){
    console.log("Hello Everybody");
}
myvoid();

// Optional Parameter in function
function add(a:number, b:number, c?:number){
    return c? a+b+c : a+b;
}
console.log("add = ", add(8,12,5));

// Required Parameter in function

function mults(x:number, y:number, z=10){
    return x*y*z;
}
console.log("Multiples = ", mults(3,1));


// Rest Parameter in function

function summations(num1:number, num2:number, ...num3:number[]){
    return num1+num2+ num3.reduce((a,b)=>a+b);
}
let numbers = [1,2,3,4,5];
console.log("Summations = ", summations(20,30,...numbers));










