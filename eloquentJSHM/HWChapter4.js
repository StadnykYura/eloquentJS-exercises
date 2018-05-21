/*
The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end,
and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument 
that indicates the “step” value used when building the array. 
If no step is given, the elements go up by increments of one, corresponding to the old behavior.
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/


function range(startNum, endNum){
    let arrayResult = [];
    for (let start = startNum, index = 0; start <= endNum; index++, start++) {
        arrayResult[index] = start; 
    }
    return arrayResult;
}
console.log(range(1,10));

function sumOfArrayNumbers(array){
    let resultSum = 0;
    for (let element of array) {
        resultSum += element;
    }
    return resultSum;
}

console.log(sumOfArrayNumbers(range(1,10)));

function rangeSecondEdition(startNum, endNum, step){

    let arrayResult = [];
    if (step < 0 && startNum>endNum){
        for (let start = startNum, index = 0; start >= endNum; index++, start +=step) {
            arrayResult[index] = start; 
        }
    } else if (step > 0 && startNum < endNum){
        for (let start = startNum, index = 0; start <= endNum; index++, start +=step) {
            arrayResult[index] = start; 
        }
    } else {
        return "wrong arguments"
    }
    return arrayResult;
}

console.log(rangeSecondEdition(1, 10, 2));
console.log(rangeSecondEdition(5, 2, -1));

/*
Reversing an array
Arrays have a reverse method which changes the array by inverting the order in which its elements appear. 
For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: 
it modifies the array given as argument by reversing its elements. 
Neither may use the standard reverse method.
*/

function reverseArray(array){
    let arrayResult=[];
    for (let index = array.length-1; index >= 0; index--) {
        arrayResult.push(array[index]);
    }
    return arrayResult;
}
console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array){
    let arrayLength = array.length;
    for (let index = 0; index < arrayLength/2; index++) {
        const element = array[index];
        array[index] = array[arrayLength-1-index];
        array[arrayLength-1-index] = element;
    }
    return array;
}

let arrayValue = [1, 2, 3, 4, 5, 6];
console.log(reverseArrayInPlace(arrayValue));

//A list
// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 

function arrayToList(array){
    if (array === null || array.length === 0){
        return "There are no elemenets in array"
    }
    let listResult = {};
    let index = 0;
    listResult.value = array[index];
    if(array.length===1){
        listResult.rest = null;
    } else {
        listResult.rest = arrayToList(array.slice(index+1));    
    }
    return listResult;
}
console.log(arrayToList([10, 20, 30]));

// Also write a listToArray function that produces an array from a list.

function listToArray(list){
    let arrayResult = [];
    while (list !== null) {
        let value = list.value;
        arrayResult.push(value);
        list = list.rest;
    }
    return arrayResult;
}
console.log(listToArray(arrayToList([10, 20, 30])));

//Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list
function prepend(number, list){
    let listResult = {};
    listResult.value = number;
    listResult.rest = list;
    return listResult;
}
console.log(prepend(10, prepend(20, null)));

//Function nth, which takes a list and a number and
//returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

function nth(list, position){
    let listPosition = -1;
    let nthElement;
    do {
        if(list == null){
            return undefined;
        }
        nthElement = list.value;
        //console.log(nthElement);
        list = list.rest;
        listPosition++; 
    } while (listPosition !== position) 

    return nthElement; 
}

console.log(nth(arrayToList([10, 20, 30]), 1));

//a recursive version of nth.

function nthRecursive(list, position){
    if (position === 0){
        if(list !== null){
            return list.value;
        } else {
            return undefined;
        }
    } else{
        return nthRecursive(list.rest, position-1)
    }
}
console.log(nth(arrayToList([10, 20, 30]), 2));

//Deep comparison
/*
Write a function deepEqual that takes two values and returns true only if they are the same value or 
are objects with the same properties, 
where the values of the properties are equal when compared with a recursive call to deepEqual.
*/

function deepEqual(obj1, obj2){
    if(obj1 !== null && typeof obj1 === "object" && obj2 !== null && typeof obj2 === "object" ){
        let arrayKeys1 = Object.keys(obj1);
        let arrayKeys2 = Object.keys(obj2);
        if(arrayKeys1.length != arrayKeys2.length){
            return false;
        }
        let existKey;
        for (let i = 0; i < arrayKeys1.length; i++) {
            existKey = false;
            for (let j = 0; j < arrayKeys2.length; j++) {
                if(arrayKeys1[i]===arrayKeys2[j]){
                    existKey = true;
                    if (!deepEqual(obj1[arrayKeys1[i]], obj2[arrayKeys2[j]])){
                        return false;
                    } 
                }
            }
            if(existKey){
                continue;
            }else{
                return false;
            }
        }
        return true;
    } else if (typeof obj1 !== "object" && typeof obj2 !== "object"){
        return obj1===obj2;
    } else {
        return false;
    }
}

let obj = {here: {is: "an"}, object: 2};
//console.log(Object.keys(obj));
console.log(obj==={here: {is: "an"}, object: 2});

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

