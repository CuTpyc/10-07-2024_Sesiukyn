// Task 1: IS from strings
function charAtConcat(string1, string2) {
    var firstChar = string1.charAt(string1.indexOf("I"));
    var secondChar = string2.charAt(string2.indexOf("S"));
    return firstChar + secondChar;
}
var string1 = "I love";
var string2 = "JavaScript";
console.log(charAtConcat(string1, string2)); // "IS"
// Task 2: contains JavaScript
function sliceIncludes(originalString) {
    var startIndex = originalString.indexOf("ukrainian");
    var languagesString = originalString.slice(startIndex);
    var containsJavaScript = languagesString.includes("JavaScript");
    return {
        newString: languagesString,
        containsJavaScript: containsJavaScript
    };
}
var originalString = "I know 4 foreign languages: ukrainian, russian, english and JavaScript";
console.log(sliceIncludes(originalString).newString); // "ukrainian, russian, english and JavaScript"
console.log(sliceIncludes(originalString).containsJavaScript); // true
// Task 3: return string
function strSplit(inputString) {
    return inputString.split(" ").slice(0, 5);
}
var inputString = "Ще не вмерла в Україні ні слава, ні воля";
console.log(strSplit(inputString)); // ["Ще", "не", "вмерла", "в", "Україні"]
// Task 4: 
function repeatLastIndex(inputString) {
    return inputString.repeat(3).lastIndexOf('C');
}
console.log(repeatLastIndex("ACHTUNG")); // Last index of 'C' in the repeated string
// Task 5: 
function replace(inputString) {
    // Replace "Америка" with "Україна"
    return inputString.replace("Америка", "Україна");
}
console.log(replace("Америка - найкраща країна у світі")); // "Україна - найкраща країна у світі"
// Arrays ========================================================================================================================================================
// Task 1: 
function popPush(countries) {
    countries.pop();
    countries.push("Іспанія");
    return countries;
}
console.log(popPush(["Україна", "Америка", "Португалія", "росія"])); // ["Україна", "Америка", "Португалія", "Іспанія"]
// Task 2: 
function reverseShift(animals) {
    animals.reverse().shift();
    return animals;
}
console.log(reverseShift(["єнот", "лисиця", "заєць", "їжак", "ведмідь"])); // ["їжак", "заєць", "лисиця", "єнот"]
// Task 3: 
function sortUnshift(arr) {
    var newArr = arr.sort();
    newArr.unshift("aнанас");
    return newArr;
}
var fruits = ["полуниця", "слива", "банан", "яблуко", "груша"];
console.log(sortUnshift(fruits)); // ["aнанас", "банан", "груша", "полуниця", "слива", "яблуко"]
// Task 4: 
function sliceSplice(cities) {
    cities.splice(0, 1); // Remove "Київ"
    cities.splice(cities.length - 1, 1); // Remove "Харків"
    var indexVinnytsia = cities.indexOf("Вінниця");
    cities.splice(indexVinnytsia, 0, "Одеса");
    return cities;
}
var citiesArray = ["Київ", "Запоріжжя", "Житомир", "Вінниця", "Харків"];
var updatedArray = sliceSplice(citiesArray);
console.log(updatedArray); // ["Запоріжжя", "Житомир", "Одеса", "Вінниця"]
function flatFilter(arr) {
    // Flatten the array and filter out numbers greater than 100
    var flatArray = arr.flatMap(function (item) {
        if (Array.isArray(item)) {
            return flatFilter(item);
        }
        else {
            return item;
        }
    });
    // Filter out numbers greater than 100
    var filteredArray = flatArray.filter(function (item) { return typeof item === 'number' && item > 100; });
    return filteredArray;
}
var array = [123, 233, [31, 40, [225, 6]]];
var result = flatFilter(array);
console.log(result); // [123, 233, 225]
// Numbers ========================================================================================================================================================
// Task 1:
function minCeil(a, b, c) {
    var minNum = Math.min(a, b, c);
    var result = Math.ceil(minNum);
    return result;
}
var a = 4.33;
var b = 5.66;
var c = 24.74;
console.log(minCeil(a, b, c)); // 5
// Task 2:
function maxFloor(a, b, c) {
    var maxNum = Math.max(a, b, c);
    var result = Math.floor(maxNum);
    return result;
}
var d = 8.88;
var e = 7.77;
var f = 9.99;
console.log(maxFloor(d, e, f)); // 9
// Task 3: 
function formatNumber(number) {
    var fixed = number.toFixed(2);
    var locale = number.toLocaleString();
    var precision = number.toPrecision(3);
    return {
        fixed: fixed,
        locale: locale,
        precision: precision
    };
}
var number = 12345.6789;
var formatted = formatNumber(number);
console.log(formatted); // { fixed: "12345.68", locale: "12,345.679", precision: "1.23e+4" }
// Task 4:
function getRandomNumber() {
    return Math.random();
}
var randomNumber = getRandomNumber();
console.log(randomNumber); // Random number between 0 and 1
// Task 5:
function getAbsoluteValue(number) {
    return Math.abs(number);
}
console.log(getAbsoluteValue(-9)); // 9
