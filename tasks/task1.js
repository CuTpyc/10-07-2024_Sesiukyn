// Strings ========================================================================================================================================================
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log('Tasks with string');
console.log('Task 1: Mirror string');
var text = 'some text that has been reversed';
function mirrorString(element) {
    return element.split('').reverse().join('');
}
console.log(mirrorString(text));
console.log('Task 2: Find the palindrome');
var isPalindrome = "Some text that mustn't be a palindrome";
function searchPalindrome(element) {
    if (element.toLowerCase().split('').join('') === element.toLowerCase().split('').reverse().join('')) {
        return ("String ".concat(element, " is a palindrome"));
    }
    else {
        return ("String ".concat(element, " is not a palindrome"));
    }
}
console.log(searchPalindrome(isPalindrome));
console.log('Task 3: Count vowels');
function countVowels(str) {
    var count = 0;
    str = str.toLowerCase();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Some text for example"));
console.log('Task 4: To PascalCase');
function toPascalCase(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0)
            return "";
        return index === 0 ? match.toUpperCase() : match.toUpperCase();
    })
        .replace(/[^a-zA-Z0-9]/g, '');
}
var inputStringForExample = "Example String for Conversion";
var pascalCase = toPascalCase(inputStringForExample);
console.log("PascalCase: ".concat(pascalCase)); // ExampleStringForConversion
console.log('Task 5: To snake_case');
function toSnakeCase(str) {
    return str
        .replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map(function (word) { return word.toLowerCase(); })
        .join('_');
}
var snakeCase = toSnakeCase(inputStringForExample);
console.log("Snake_case: ".concat(snakeCase)); // example_string_for_conversion
// Numbers ========================================================================================================================================================
console.log('Tasks with numbers');
console.log('Task 1: Random number between selected range');
function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInteger(1, 10)); // Random number between 1 and 10 inclusive
console.log(getRandomInteger(20, 30)); // Random number between 20 and 30 inclusive
console.log(getRandomInteger(-10, 10)); // Random number between -10 and 10 inclusive
console.log('Task 2: Rounding a floating-point number');
function roundToDecimal(num, decimalPlaces) {
    var factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}
console.log(roundToDecimal(3.1415926535, 2)); // 3.14
console.log(roundToDecimal(1.123456789, 4)); // 1.1235
console.log(roundToDecimal(10.5, 0)); // 11
console.log(roundToDecimal(123.456, 1)); // 123.5
console.log('Task 3: Solve problem of floating num');
function sumFloatingPointNumbers(numbers) {
    var factor = 1e10;
    return numbers.reduce(function (accumulator, currentValue) {
        return Math.round((accumulator * factor) + (currentValue * factor)) / factor;
    }, 0);
}
console.log(sumFloatingPointNumbers([0.1, 0.2, 0.3])); // 0.6
console.log(sumFloatingPointNumbers([1.1, 2.2, 3.3])); // 6.6
console.log(sumFloatingPointNumbers([0.123, 0.456, 0.789])); // 1.368
console.log(sumFloatingPointNumbers([10.5, 20.5, 30.5])); // 61.5
console.log('Task 4: Check if a Number is Prime');
function isPrime(num) {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    }
    return true;
}
console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log(isPrime(29)); // true
console.log('Task 5: Finding the Greatest Common Divisor');
function gcd(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(gcd(48, 18)); // 6
console.log(gcd(56, 98)); // 14
console.log(gcd(101, 103)); // 1
console.log(gcd(44, 19)); // 1
console.log(gcd(270, 192)); // 6
// Arrays ========================================================================================================================================================
console.log("Tasks with Arrays");
console.log("Task 1: Second biggest element in Array");
function secondLargest(arr) {
    var max = -Infinity, secondMax = -Infinity;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num > max) {
            secondMax = max;
            max = num;
        }
        else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }
    return secondMax;
}
console.log(secondLargest([1, 2, 3, 4, 5])); // 4
console.log(secondLargest([10, 20, 20, 30])); // 20
console.log(secondLargest([5, 7, 7, 8, 3])); // 7
console.log("Task 2: Merge and sort two arrays");
function mergeAndSort(arr1, arr2) {
    var merged = __spreadArray([], new Set(__spreadArray(__spreadArray([], arr1, true), arr2, true)), true);
    return merged.sort(function (a, b) { return a - b; });
}
console.log(mergeAndSort([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeAndSort([10, 20], [20, 30])); // [10, 20, 30]
console.log(mergeAndSort([5, 7, 9], [5, 7, 11])); // [5, 7, 9, 11]
console.log("Task 3: Random shuffle array");
function shuffleArray(arr) {
    var _a;
    var array = arr.slice();
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));
console.log(shuffleArray(['a', 'b', 'c', 'd']));
console.log("Task 4: Search pairs of numbers that equal the target value");
function findPairs(arr, target) {
    var pairs = [];
    var set = new Set();
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var num = arr_2[_i];
        var complement = target - num;
        if (set.has(complement)) {
            pairs.push([num, complement]);
        }
        set.add(num);
    }
    return pairs;
}
console.log(findPairs([1, 2, 3, 4, 5], 5)); // [[3, 2], [4, 1]]
console.log(findPairs([10, 20, 10, 30, 40], 50)); // [[40, 10], [30, 20]]
console.log(findPairs([5, 5, 10, 15], 20)); // [[15, 5]]
console.log('Task 5: Remove all falsy values');
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, '', 3, null, 'a', undefined, NaN])); // [1, 2, 3, 'a']
console.log(removeFalsyValues([false, true, null, 'hello', '', 42])); // [true, 'hello', 42]
console.log(removeFalsyValues([NaN, 0, '', undefined, 'world'])); // ['world']
