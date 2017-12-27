var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(array, element){
var arr = [array]
var arr2 = [element, ...array]
return arr2
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var arr = []
  arr.unshift(element)
  return arr
}