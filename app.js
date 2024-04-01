//  ==================== Assignment # 5 ===================


// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

var multiArray = [];


// 2. Declare and initialize a multidimensional array representing the following matrix:

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var i=0; i< 3; i++){
    for(var j=0; j< 4; j++){
        document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
}

// 3. Write a program to print numeric counting from 1 to 10.

for (var i=0; i < 11; i++){
    document.write(i + "<br>")
}

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var userInp = +prompt("Enter a number to shows its multiplication table")
var userInp2 = +prompt("Enter lenght multiplication table")

for (var i=1; i <= userInp2; i++){
    document.write(`${userInp} x ${i} = ${userInp * i}` + "<br>")
}


// 5. Write a program to print items of the following array using for loop: 

var fruits = ["apple", "banana", "mango", "orange","strawberry"]

for (var i=0; i < fruits.length; i++){
    document.write(fruits[i] + "<br>")
}
document.write("<br>")
for (var i=0; i < fruits.length; i++){
    document.write(`Element at index ${i} is ${fruits[i]}` + "<br>")
}

// 6. Generate the following series in your browser. See example output.

document.write(`<h1>Counting:</h1>`)

for (var i=1; i < 16; i++){
    document.write(i + ","+ " ")
}

document.write(`<h1>Reverse:</h1>`)

for (var i=10; i > 0; i--){
    document.write(i +","+ " " )
}

document.write(`<h1>Even:</h1>`)

for (var i=0; i < 21; i=i+2){
    document.write(i +  ","+" ")
}
document.write(`<h1>Odd:</h1>`)

for (var i=1; i < 21; i=i+2){
    document.write(i +  ","+" ")
}

document.write(`<h1>Series:</h1>`)

for (var i=2; i < 21; i=i+2){
    document.write(i +  "k"+","+" ")
}
