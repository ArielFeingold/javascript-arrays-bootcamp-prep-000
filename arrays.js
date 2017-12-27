var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(element){
var array = new Array();
[element, ...array];
return array;
}; 

