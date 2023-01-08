console.log(`1.)	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`);
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log('Array ages: ');
console.log(ages);
console.log(`1a.)	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
Do not use numbers to reference the last element, find it programmatically, 
ages[7] minus ages[0] is not allowed!`);
console.log('Subtract value of first element from value of last element: ' + (ages[ages.length-1] - ages[0]));
console.log(`1b.)	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`);
const addAge = ages.push(45);
console.log('Add new age (45) to array ages: ');
console.log(ages);
console.log('Subtract value of first element from value of last element: ' + (ages[ages.length-1] - ages[0]));

console.log(`1c.)	Use a loop to iterate through the array and calculate the average age.`);
let total=0;
let average=0;
for(let i=0; i<ages.length; i++){
  total=total+ages[i];
}
console.log('Average age: ' + (total / ages.length));
// expected output: 275/9=30.5555

console.log(`2.)	Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck, Bob.`);
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log('Array names: ');
console.log(names);

console.log(`2a.)	Use a loop to iterate through the array and calculate the average number of letters per name.`)
let namesTotal=0;
let nameAverage=0;
for (let i=0; i<names.length; i++){
namesTotal += names[i].length;
nameAverage=namesTotal/names.length;  
}
console.log('Average number of letters per name in names array: ' + nameAverage);
// expected 3.83

console.log(`2b.)	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. `)
names.forEach (function(element){
  console.log('Concatenate names with spaces: ' + names.join(" "))
});
 
console.log(`3.)	How do you access the last element of any array?`);
console.log(ages);
console.log('ages[ages.length-1]');
console.log('Last element of array ages: ' + ages[ages.length-1]);

console.log(`4.)	How do you access the first element of any array?`);
console.log(ages);
console.log('ages[0]');
console.log('First element of array ages: ' + ages[0]);

console.log(`5.)	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`);
 let nameLengths = names.map(function (element){
  return element.length;
 }); 
console.log('Array nameLengths: ');
console.log(nameLengths);

console.log(`6.) Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);
 let lengthSum = nameLengths.reduce(function (accum, cVal){
  return accum + cVal;
 });
 console.log('Sum of array nameLengths: ' + lengthSum);

 console.log(`7.)	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.`);
 function wordRepeat(word, n){
let newWord = " ";
  for (i=0; i<n; i++){
    newWord += word;
  }
    return newWord;
 }
 console.log(wordRepeat('Hello', 4));

 console.log(`8.)	Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`);
function createFullName(firstName, lastName){
  console.log(firstName + ' ' + lastName);
}
console.log('Full Name: ');
createFullName('Tim','Smith');

console.log(`9.)	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`);
console.log('Create function to check if array total is > 100');
function checkArrayTotal(arrayNumbers){
  console.log('Array values:');
  console.log(arrayNumbers);
  let numTotal=0;
  for(let i=0; i<arrayNumbers.length; i++){
    numTotal=numTotal + arrayNumbers[i];
  }
  console.log('Sum of array numbers: ' + numTotal);
     if (numTotal >= 100){
  return true
  }else{
  return false
  }
  }
console.log(checkArrayTotal([25, 50, 75]));
   
console.log(`10.)	Write a function that takes an array of numbers and returns the average of all the elements in the array.`);
function calculateArrayAverage(array2){
    let initialValue=0;
    for(let i=0; i<array2.length; i++){
      initialValue=initialValue + array2[i];
    }
    console.log('Array values:');
    console.log(array2);
    console.log('Average of elements in array: ' + initialValue/array2.length);
  }
  calculateArrayAverage([2, 4, 6, 8, 10]);

  console.log(`11.)	Write a function that takes two arrays of numbers and returns true if the average
   of the elements in the first array is greater than the average of the elements
    in the second array.`);
function compareArrayAverages(arrayA, arrayB){
let totalA=0;
for (let i=0; i<arrayA.length; i++){
  totalA += arrayA[i];
}
console.log('ArrayA: ' + arrayA);
console.log('Average of ArrayA: ' + totalA/arrayA.length);
let totalB=0;
for (let i=0; i<arrayB.length; i++){
  totalB += arrayB[i];
}
console.log('ArrayB: ' + arrayB);
console.log('Average of ArrayB: ' + totalB/arrayB.length);
if ((totalA/arrayA.length) > (totalB/arrayB.length)){
  return true
}else{
  return false  
}
}
console.log(compareArrayAverages([2, 4, 6, 8, 10], [1, 2, 3, 4, 5]));

console.log(`12.)	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)
function willBuyDrink(isHotOutside, moneyInPocket){
if (isHotOutside=true && moneyInPocket > 10.50){
console.log('I will buy a drink');
return true 
//console.log('I will buy a drink'); why does this not print if after return, only before return?
}else{
console.log('I will not buy a drink');
return false
}
}
console.log(willBuyDrink(true, 12));

console.log(`13.)	Create a function of your own that solves a problem. 
In comments, write what the function does and why you created it.`)
/*Every week students are tested.  If the average of the student scores is less than 80 then
they must have reteach session.  Calculate the average of the student scores.  Return true if average is less than 80*/
function calculateAverageScores(scores){
  console.log('Student scores:');
  console.log(scores);
  let numTotal=0;
  for(let i=0; i<scores.length; i++){
    numTotal=numTotal + scores[i];
  }
  console.log('Average of scores: ' + numTotal/scores.length);
     if (numTotal/scores.length < 80){
  console.log('Average score is less than 80. Students need Reteach session.')
      return true
  }else{
  console.log('Congratulations! Students do not need Reteach session.')
  return false
  }
  }
console.log(calculateAverageScores([76, 55, 78, 99, 84, 82,59]));
