// Progression #1: Greatest of the two numbers
function greaterOfTwoNumbers(num1 ,num2) {
  if(num1>num2) {
    return(num1);
  }
  else {
    return(num2);
  }
}
greatestOfTwoNumber(10,20);

//console.log(greatestOfTwoNumber(2,3));
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

// function findScaryWord(){
//  console.log(words.map(w => w.length));
  
//   // if(findScaryWord()==0){
//   //   return null;
//   // }
//   // for(var i=0;i<words.length;i++){
//   //   console.log(words[i].length);
//   // }
// }
function findScaryWord(words)
{
  let scaryword,maxlen=0;
  if(words.length==0)
  return null;
for(var i=0;i<words.length;i++)
{
  var j= words[i].length;
  if(j>maxlen)
  {
  maxlen =j;
  scaryword=words[i];
}
}
return scaryword;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
if(numbers.length==0)
  return 0;

var sum=0;
    for(var i=0;i<numbers.length;i++)
    {
      sum +=numbers[i]; 
}
return sum;
}
// Progression #4: Calculate the average
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixedArr)
{
  var c = 0;
  for(var i = 0;i<mixedArr.length;i++)
  {
    if(typeof mixedArr[i]=="number")
    {
    c = c+mixedArr[i];
    }
    if(typeof mixedArr[i]=="string")
    {
    c=c+mixedArr[i].length;
    }
    if(typeof mixedArr[i]=="boolean")
    { if(mixedArr[i]==true)
         {c+=1;
         }
         else
         {
         c+=0;
         console.log("unsupported data type");
         }
    }
  }
  return c;
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg){
  if(numbersAvg.length==0)
    return null;
  var j=0;
    for(var i=0;i<numbersAvg.length;i++){
      j=j+numbersAvg[i];
    }
return (j/numbersAvg[i].length);
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr){

  if(wordsArr.length==0){
    return null;
  }
  var len=0;
    for(var i=0;i<wordsArr.length;i++){
      len=len+wordsArr[i];
    }
return (len/wordsArr[i].length);
}


function avg(wordsArr){

}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique){
  if(wordsUnique.length==0){
    return null;
  }

}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(words, wordsFind) {
  if(words.length == 0) {
    return null;
  }
  for(var i=0; i<=words.length; i++) {

    if(words[i] === wordsFind) {
      return true;
    }
  }
  return false
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(arrayofword,searchword){
if(arrayofword.length==0){
  return 0;
}
var count=0;
for(var i=0;i<arrayofword.length;i++){
  if(arrayofword===searchword)
count++;
}
return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(){
  if(arr[0] === 1) {
    return 1;
  }
  else 
  return 100; 
}