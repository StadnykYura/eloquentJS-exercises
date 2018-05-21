/*Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.*/

// Your code here.

function min(intA, intB){
    if(intA > intB){
        return intB;
    } else if (intA < intB){
        return intA;
    } else {
        return "numbers are equeal";
    }
}

console.log(min(1, 4));

/*Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?*/

function isEven(a){
    if (a===0){
        return true;
    } else if (a===1){
        return false;
    } else if (a<0){
        return false;
    } else {
        return isEven(a-2);
    }
}

console.log(isEven(50));
console.log(isEven(75));


/*
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters
there are in the string.

Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/
// Your code here.

function countBs(string){
    let count = 0;
    for (let index = 0; index < string.length; index++) {
        let element = string[index];
        if(element==="B"){
            count++;
        }
    }
    return count;
}
console.log(countBs("BBC"));

function countChar(string, char){
    let count = 0;
    for (let index = 0; index < string.length; index++) {
        let element = string[index];
        if(element===char){
            count++;
        }
    }
    return count;
}
console.log(countChar("kakkerlak", "k"));








