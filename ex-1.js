// Exercise #1: For Each Function


function forEach (array, operation){
  let newArrays=[]
  let num = 5000
  for (let i=0 ; i<array.length; i++){
    newArrays.push (operation(array[i],num))
  }
  return newArrays
}
 
function sum(a,b){
  return a+b
}


const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

// Using `forEach` function here
newEmployeeSalaries = forEach(employeeSalaries,sum)

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
