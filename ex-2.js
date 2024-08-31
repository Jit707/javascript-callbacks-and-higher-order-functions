//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  let result
  for (let i=0 ; i<array.length; i++ ){
    if (array[i] > [5]){
      result = true
    }else if ( array[i] < [5]){
      result = false
    }else{
      result = "valid"
    }
  }
 return result
}
function score(array){
for (let i=0 ; i<array.length; i++ ){
  if (array[i] > 70){
  scoreresultmorethan70 = true
  }else{
    scoreresultmorethan70 = false
  }}
}



const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result 
let scoreRoom2Result 
let scoreRoom3Result;
