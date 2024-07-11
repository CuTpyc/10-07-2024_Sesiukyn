// Task 1: IS from strings
function charAtConcat(string1: string, string2: string): string {
    let firstChar: string = string1.charAt(string1.indexOf("I"));
    let secondChar: string = string2.charAt(string2.indexOf("S"));
    return firstChar + secondChar;
}

let string1: string = "I love";
let string2: string = "JavaScript";
console.log(charAtConcat(string1, string2)); // "IS"

// Task 2: contains JavaScript
function sliceIncludes(originalString: string): { newString: string, containsJavaScript: boolean } {
    let startIndex: number = originalString.indexOf("ukrainian");
    let languagesString: string = originalString.slice(startIndex);
    let containsJavaScript: boolean = languagesString.includes("JavaScript");
    return {
        newString: languagesString,
        containsJavaScript: containsJavaScript
    };
}

let originalString: string = "I know 4 foreign languages: ukrainian, russian, english and JavaScript";
console.log(sliceIncludes(originalString).newString); // "ukrainian, russian, english and JavaScript"
console.log(sliceIncludes(originalString).containsJavaScript); // true

// Task 3: return string
function strSplit(inputString: string): string[] {
    return inputString.split(" ").slice(0, 5);
}

let inputString: string = "Ще не вмерла в Україні ні слава, ні воля";
console.log(strSplit(inputString)); // ["Ще", "не", "вмерла", "в", "Україні"]

// Task 4: 
function repeatLastIndex(inputString: string): number {
    return inputString.repeat(3).lastIndexOf('C');
}

console.log(repeatLastIndex("ACHTUNG")); // Last index of 'C' in the repeated string

// Task 5: 
function replace(inputString: string): string {
    // Replace "Америка" with "Україна"
    return inputString.replace("Америка", "Україна");
}

console.log(replace("Америка - найкраща країна у світі")); // "Україна - найкраща країна у світі"

// Arrays ========================================================================================================================================================

// Task 1: 
function popPush(countries: string[]): string[] {
    countries.pop();
    countries.push("Іспанія");
    return countries;
}

console.log(popPush(["Україна", "Америка", "Португалія", "росія"])); // ["Україна", "Америка", "Португалія", "Іспанія"]

// Task 2: 
function reverseShift(animals: string[]): string[] {
    animals.reverse().shift();
    return animals;
}

console.log(reverseShift(["єнот", "лисиця", "заєць", "їжак", "ведмідь"])); // ["їжак", "заєць", "лисиця", "єнот"]

// Task 3: 
function sortUnshift(arr: string[]): string[] {
    let newArr: string[] = arr.sort();
    newArr.unshift("aнанас");
    return newArr;
}

const fruits: string[] = ["полуниця", "слива", "банан", "яблуко", "груша"];
console.log(sortUnshift(fruits)); // ["aнанас", "банан", "груша", "полуниця", "слива", "яблуко"]

// Task 4: 
function sliceSplice(cities: string[]): string[] {
    cities.splice(0, 1); // Remove "Київ"
    cities.splice(cities.length - 1, 1); // Remove "Харків"
    let indexVinnytsia: number = cities.indexOf("Вінниця");
    cities.splice(indexVinnytsia, 0, "Одеса");
    return cities;
}

let citiesArray: string[] = ["Київ", "Запоріжжя", "Житомир", "Вінниця", "Харків"];
let updatedArray: string[] = sliceSplice(citiesArray);
console.log(updatedArray); // ["Запоріжжя", "Житомир", "Одеса", "Вінниця"]

// Task 5:
type TDeepNumbers = number | TDeepNumbers[];

function flatFilter(arr: TDeepNumbers[]): number[] {
    // Flatten the array and filter out numbers greater than 100
    let flatArray: number[] = arr.flatMap(item => {
        if (Array.isArray(item)) {
            return flatFilter(item);
        } else {
            return item;
        }
    }) as number[];
    
    // Filter out numbers greater than 100
    let filteredArray: number[] = flatArray.filter(item => typeof item === 'number' && item > 100);
    
    return filteredArray;
}

let array: TDeepNumbers[] = [123, 233, [31, 40, [225, 6]]];
let result: number[] = flatFilter(array);
console.log(result); // [123, 233, 225]

// Numbers ========================================================================================================================================================

// Task 1:
function minCeil(a: number, b: number, c: number): number {
    let minNum: number = Math.min(a, b, c);
    let result: number = Math.ceil(minNum);
    return result;
}

let a: number = 4.33;
let b: number = 5.66;
let c: number = 24.74;
console.log(minCeil(a, b, c)); // 5

// Task 2:
function maxFloor(a: number, b: number, c: number): number {
    let maxNum: number = Math.max(a, b, c);
    let result: number = Math.floor(maxNum);
    return result;
}

let d: number = 8.88;
let e: number = 7.77;
let f: number = 9.99;
console.log(maxFloor(d, e, f)); // 9

// Task 3: 
function formatNumber(number: number): { fixed: string, locale: string, precision: string } {
    let fixed: string = number.toFixed(2);
    let locale: string = number.toLocaleString();
    let precision: string = number.toPrecision(3);
    return {
        fixed: fixed,
        locale: locale,
        precision: precision
    };
}

let number: number = 12345.6789;
let formatted: { fixed: string, locale: string, precision: string } = formatNumber(number);
console.log(formatted); // { fixed: "12345.68", locale: "12,345.679", precision: "1.23e+4" }

// Task 4:
function getRandomNumber(): number {
    return Math.random();
}

let randomNumber: number = getRandomNumber();
console.log(randomNumber); // Random number between 0 and 1

// Task 5:
function getAbsoluteValue(number: number): number {
    return Math.abs(number);
}

console.log(getAbsoluteValue(-9)); // 9
