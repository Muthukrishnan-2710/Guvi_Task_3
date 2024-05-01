// Do the below programs in anonymous function & IIFE
// 1. Print odd numbers in an array
// anonymous function
let number = [1,2,3,4,5,6,7,8,9,10];

let printoddnumber = function(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
            console.log(arr[i]);
        }
    }
};
printoddnumber(number);
 
// IIFE

let numbers = [1,2,3,4,5,6,7,8,9,10];

(function(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
            console.log(arr[i]);
        }
    }
})(numbers);

// Arrow function;

let number2 = [1,2,3,4,5,6,7,8,9,10];

let oddnumber = (arr)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !==0){
            console.log(arr[i])
        }
    }
};

oddnumber(number2)

// 2. Sum of all numbers in an array
// anonymous function

let num = [1,2,3,4,5];
let sumofnum = function(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(sumofnum(num));

// IIFE

let num2= [10,20,30,40,50];

let sumofnum2 = (function(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
})(num2);
console.log(sumofnum2);

// Arrow function;

let num3 =[2,4,5,6,7,8];

let sumofnum3 = (arr)=>{
    let sum =0;
    for(let i =0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
};
console.log(sumofnum3(num3))

// 3. Return all the palindromes in an array

// anonymous function;

let name = ['racecar','level','muthu','krishnan','rador'];
let ispalindrome = function(arr){
    let palindromes =[];
    for( let name of arr){
        if(name === name.split('').reverse().join('')){
            palindromes.push(name);
        }
    }
    return palindromes
}
console.log(ispalindrome(name));

// IIFE;

let name2 = ['racecar','level','muthu','krishnan',"rador"];
let findpalindrome = (function(arr){
    let palindromes2 =[];
    for(let word of arr){
        if(word === word.split('').reverse().join('')){
            palindromes2.push(word);
        }
    }
    return palindromes2
})(name2);
console.log(findpalindrome);

// Arrow function

let name3 = ['racecar','level','muthu','krishnan',"rador"];

let findpalindrome2 = (arr)=> {
    let palindromes3 = [];
    for(let word of arr){
        if(word === word.split('').reverse().join('')){
          palindromes3.push(word);
        }
    }
    return palindromes3;
}
console.log(findpalindrome2(name3));

// 4. Convert all the strings to title caps in a string array
// anonymous function:
let strings = ["hello world", "good morning", "how are you"];

let toTitleCase = function(arr) {
    let titleCaseArray = [];
    for (let str of arr) {
        let words = str.split(' ');
        let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        titleCaseArray.push(capitalizedWords.join(' '));
    }
    return titleCaseArray;
};

console.log(toTitleCase(strings));

// IIFE

let strings2 = ["hello world", "good morning", "how are you"];

let titleCaseStrings = (function(arr) {
    let titleCaseArray = [];
    for (let str of arr) {
        let words = str.split(' ');
        let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        titleCaseArray.push(capitalizedWords.join(' '));
    }
    return titleCaseArray;
})(strings2);

console.log(titleCaseStrings);

// Arrow function

let strings3 = ["hello world", "good morning", "muthu"];

let toTitleCase2 = (arr) => {
    let titleCaseArray = [];
    for (let str of arr) {
        let words = str.split(' ');
        let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        titleCaseArray.push(capitalizedWords.join(' '));
    }
    return titleCaseArray;
};

console.log(toTitleCase2(strings3));

// 5. Return all the prime numbers in an array
// Anoymous function

let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let findPrimes = function(arr) {
    let primes = [];
    for (let num of arr) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
};

let isPrime = function(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(findPrimes(numbers4));

// IIFE

let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primes = (function(arr) {
    let primes = [];
    for (let num of arr) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
})(numbers5);

let isPrime2 = function(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(primes);

// Arrow function;

let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let findPrimes1 = (arr) => {
    let primes = [];
    for (let num of arr) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
};

let isPrime3 = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(findPrimes1(numbers6));

// 6. Return median of two sorted arrays of the same size.

// Anoymous function

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

let findMedian = function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let length = merged.length;
    if (length % 2 === 0) {
        return (merged[length / 2 - 1] + merged[length / 2]) / 2;
    } else {
        return merged[Math.floor(length / 2)];
    }
};

console.log(findMedian(arr1, arr2));

// IIFE

let arr3 = [1, 3, 5, 7, 9];
let arr4 = [2, 4, 6, 8, 10,11];

let median = (function(arr3, arr4) {
    let merged = arr3.concat(arr4).sort((a, b) => a - b);
    let length = merged.length;
    if (length % 2 === 0) {
        return (merged[length / 2 - 1] + merged[length / 2]) / 2;
    } else {
        return merged[Math.floor(length / 2)];
    }
})(arr3, arr4);

console.log(median);

// 7. Remove duplicates from an array

// Anoymous function

let arr = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8];

let removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};

console.log(removeDuplicates(arr));

// IIFE

let arr5 = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8,9];

let uniqueArray = (function(arr) {
    return arr5.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
})(arr);

console.log(uniqueArray);

// 8. Rotate an array by k times;

// Anoymous function;

let arr6 = [1, 2, 3, 4, 5];
let k = 3;

let rotateArray = function(arr, k) {
    let n = arr.length;
    k = k % n; // To handle cases where k is greater than the length of the array
    let rotatedArray = arr6.slice(k).concat(arr.slice(0, k));
    return rotatedArray;
};

console.log(rotateArray(arr, k));

// IIFE

let arr7 = [1, 2, 3, 4, 5];
let k2 = 3;

let rotatedArray2 = (function(arr, k2) {
    let n = arr.length;
    k2 = k % n; // To handle cases where k is greater than the length of the array
    return arr7.slice(k).concat(arr.slice(0, k));
})(arr, k2);

console.log(rotatedArray2);









