//VARIABELS DATA TYPES
// fullName = "mahibullah";
// age = 20;
// price = 99.99;
// console.log(fullName);

// isFollwo = true;
// console.log(isFollwo);


// const student = {
//     fullName : "mahib khan",
//     age : 19,
//     cgpa: 8.4,
//     isPass: true,
// };

// student["name"] = "imdad khan";
// console.log (student["name"])

//PRACTICE

// const product = {
//     titile: "ball pen",
//     rating: 4,
//     offer: 5,
//     price: 250,
// };


// const profile ={
//     userName : "mahib",
//     follower: 3000,
//     following: 10,
//     isFollow: true,
// };
// console.log (profile);


//CHAPTER 2 Operators and Conditional statements

//Artimetic operators
// let a = 5;
// let b = 2;

// console.log("a = b", a, " & b =", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

//Unary operators
// let a = 5;
// let b = 2;
// console.log("a = b", a, " & b =", b);

// a --;
// console.log("a = ", a);


// Assignment Operators

// let a = 5;
// let b = 2;

// a += 4; // a = a +4

// console.log("a = ", a);

// Comparison Operators

// let a = 5;
// let b = 3;

// console.log("5 > 3", a > b);

//Conditional statements

// let age = 15;
// if(age > 18){
//     console.log("you can vote");
// }

// if(age < 18){
//     console.log("you connot vote");

// }

// let age = 26;
// if(age >= 18){
//     console.log("vote")
// }else{
//     console.log("not vote");
// }

//Odd or enven

// let num = 20;
// if(num%2 === 0){
//     console.log(num,"is even");
// }else{
//     console.log(num,"is odd");
// }

// let mode = "pink";
// let color;
// if(mode === "black"){
//     color = "black";
// }else if(mode === "blue"){
//     color = "blue";
// }else if(mode === "pink"){
//     color = "pink";
// }else{
//     color = "white";
// }

// console.log(color);

// let age = 17;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);
// let name = prompt  ("hello");

// console.log (name);


//practice

// let num = prompt("Enter a number");

// if(num % 5 === 0){
//     console.log(num, "ismultiple of 5");
// }else{
//     console.log(num, "is no multiple of 5");
// }


// let score = prompt("Enter your marks");
// let grade;
// if(score >= 90 && score <= 100){
//     grade = "A";
// }else if(score >= 70 && score <= 89){
// grade = "B";
// }else if(score >= 60 && score <= 69){
//     grade = "C";
// }else if(score >= 50 && score <= 59){
//     grade = "D";
// }else if(score >= 0 && score <= 50){
//     grade ="F";
// }
// console.log("your grade is",grade); 



// CHAPTER 3 Loops and Strings
// print 1 to 10000
// for(let count= 1; count <= 10000; count++){
//     console.log("Apna college");
// }

//Calculate sum of 1 to 5

// let sum = 0;
// for 
//     (let i = 1; i<= 7; i++){

// sum = sum + i;
// }
// console.log("sum =", sum);


//whole loop
// let i = 1;
// while (i <= 10){
//     console.log("mahib");
//     i++;
// }

// do while loop


//practice

// for(let num=0; num<=100; num++){
//   if(num%2 !== 0){
//     console.log("num =", num);
//   }
// }

//Qusetion 2
// let gameNum = 25;
// let userNum = prompt("Guess the game number");
// while(userNum != gameNum){
//  let userNum = prompt("you entered woring number . Guess again");

// }
// console.log("congtatualations, you enter the right number");

// STRING IN JS

// let str = "mahib\tullah";
// console.log(str. length);

//upper case

// let str = "mahib";
// str = str.toUpperCase();
// console.log(str);


//trim
// let str = "    mahib khan js       ";
// console.log(str.trim());


// slice

// let str = "1234567";
// console.log(str.slice(3))

// CONCAT
// let str1 = "mahib";
// let str2 = "ullah";
// let result =str2.concat(str1);
// console.log(result)

// replace

// let str = "hello";
// console.log(str.replace("hello","mahib"));


//charAt

// let str = "Ilovemom";
// console.log(str.charAt(6));




//practice Question


// let fullName = prompt("Enter your name without spaces");
// let username = "@" + fullName +fullName.length;

// console.log(username);

// CHAPTER_NO 4_ARRAY

// let marks = [97,85,86,50,79.];
// console.log(marks);
// console.log(marks . length)


// let heroes = ["mahibkhan","ali","khan","gul","ajab"];
// console.log(heroes
//     )

//PRACTACE QUESTION

// let marks = [85, 82, 69, 56,50,37];
// let sum = 0;
// for(let val of marks){
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`)












// for (let i = 1; i <= 10; i++) {
//     }
//   for (let j = 1; j <= 10; j++) {
//    console.log(`${i} * ${j} = ${i * j}`);
//   }













