/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

// Your code here.
let string = "#";
while (string.length !== 8) {
	console.log(string);
	string = string + "#";  
}


/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. 
	So if you solved it, your labor market value just went up.)
*/
//first variant
for (let index = 1; index < 101; index++) {
	let fizz = "Fizz";
	let buzz = "Buzz";
	if (index % 5 === 0 && index % 3 === 0){
		console.log(fizz+buzz);
	} else if(index % 3 === 0){
		console.log(fizz);
	} else if (index % 5 === 0 && index % 3 !== 0){
		console.log(buzz);
	} else {
		console.log(index);
	}
	
}
// second variant (more efficient)
for (let index = 1; index < 101; index++) {
	let result = "";
	if (index % 3 === 0){
		result += "Fizz";
	}
	if (index % 5 === 0){
		result += "Buzz";
	}
	console.log((result || index));	
}


/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.
*/

const bindingSize = 8;

function printCheckBoardOfGrid(numberGrid) {
	let stringBoard = "";
	for (let outer = 1; outer <= bindingSize; outer++) {
		for (let inner = 0; inner < bindingSize / 2; inner++) {
			if (outer % 2 != 0) {
				stringBoard += " #";
			}
			else {
				stringBoard += "# ";
			}
		}
		stringBoard += "\n";
	}
	console.log(stringBoard);
}
printCheckBoardOfGrid(bindingSize);



