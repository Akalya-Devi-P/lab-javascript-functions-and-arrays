// Progression #1: Greatest of the two numbers

//If num1 is greater it returns num1
//If num2 is greater it returns num2
function greaterOfTwoNumbers(num1,num2)
{
  if(num1>num2)
  {
    return num1;
  }
  else
  {
    return num2;
  }
}

// Progression #2: The lengthy word

//If an emty array is given it returns null
//Or else it returns the word with longest length
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  if(words.length==0){
    return null;
  }  
  else if(words.length==1){
    return words[0];
  }
  else if(words.length==2){
    if(words[0].length==words[1].length){
      return words[0];
    }
  }
  else if(words.length>2){
    for(i=0;i<words.length;i++){      
      if(words[0].length<words[i].length){
        words[0] = words[i];
      }   
    }
    return words[0];
  }
}

// Progression #3: Net Price

//It returns 0 if empty array is given or if all the elements are 0
//Else it returns the sum of the elements in the array
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){  
  let sum=0;
  for(i=0;i<numbers.length;i++){
    if(numbers[i]!=0){
      sum = sum +numbers[i];
    }     
  }      
  return sum; 
}
// Progression #4: Calculate the average

//It returns 0 if empty array is given or if all the elements are 0
//If one number is given in array it will return the number
//Else it returns the sum of the elements in the array
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function add(numbers){  
  let sum=0;
  for(i=0;i<numbers.length;i++){
    if(typeof numbers[i]=='string'){      
        sum = sum + numbers[i].length;    
    } 
    else if(numbers[i]==true){
      sum = sum+1;
    }
    else if(numbers[i]==false){
      sum = sum +0;
    }
    else if(typeof numbers[i]==="number"){      
        sum = sum + numbers[i];      
    }    
    else throw Error("Unsupported data type sir or ma'am");
  }      
  return sum; 
}

// Progression 4.1: Array of numbers

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function midPointOfLevels(numbersAvg){
  let sum = 0;
  if(numbersAvg.length==0){
    return null;
  }
  else{
  for(let i=0;i<numbersAvg.length;i++){
    sum = sum+numbersAvg[i];    
  }
  return sum/numbersAvg.length;
}

// Progression 4.2: Array of strings
}
function averageWordLength(wordsArr){
  let sum=0;
  if(wordsArr.length==0){
    return null;
  }
  else{
  for(let i=0;i<wordsArr.length;i++){
    sum = sum + wordsArr[i].length;
  }
  return sum/wordsArr.length;
}
}
function avg(mixedArr){
  let sum=0;
  if(mixedArr.length==0){
    return null;
  }
  else{
  for(let i=0;i<mixedArr.length;i++){
    if(typeof(mixedArr[i]) == 'string'){
      sum = sum+mixedArr[i].length;
    }
     else if(mixedArr[i]==true){
      sum = sum + 1;      
    }
    else if(mixedArr[i]==false){
      sum = sum + 0;      
    }
    else {
      sum = sum+mixedArr[i];
    }
  }
  var ans = parseFloat( (sum/mixedArr.length).toFixed(2));
  return ans;
}
}

// Progression #5: Unique arrays

//Returns null if array is empty
//If an element in the array does not repeat it takes them in a seperate array if the element repeats it will not consider the repeated element
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
  let arr=[];
  if(wordsUnique.length==0){
    return null;
  }
 else{
  for(let i=0;i<wordsUnique.length;i++){
    for(let j=i+1;j<wordsUnique.length-1;j++){
   if(wordsUnique[i] !=  wordsUnique[i+1]){
     arr[i] = wordsUnique[i];
   }
   }  
  }
  return arr;  
 }
}
// Progression #6: Find elements

//Returns null if empty array is given 
//Else it checks whether the element given as argument is present in the array if present returns true
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind,_find){
  if(wordsFind.length==0){
    return null;
  }
  else{
    for(let i=0;i<wordsFind.length;i++){
      if(wordsFind[i]==_find){
        return true;
      }
    }
  }
}
// Progression #7: Count repetition

//Returns zero if empty array is given
//Or else If any element repeats again count increases and it will return the count
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

function howManyTimesElementRepeated(wordsCount,_count){
  let count=0;
  for(let i=0;i<wordsCount.length;i++){
    if(wordsCount[i]==_count){
      count=count+1;
    }
  }
  return count;
}
// Progression #8: Bonus
//Return 1 if all the elements in the array are 1
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
function maximumProduct(matrix){
  let sum=0;
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      let mmatrix = matrix[i];
      sum = sum+mmatrix[j];
    }
  }
  let len = matrix.length*matrix.length;
  if(sum==len){
    return 1;
  }
}
