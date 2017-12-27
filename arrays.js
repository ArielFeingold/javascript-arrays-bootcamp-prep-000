var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(element){
var array = [];
[element, ...array];
return array;
}

