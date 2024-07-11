var testData4 = [
    { name: "Vasya", email: "vasya@example.com", age: "20" },
    { name: "Dima", email: "dima@example.com", age: 34.6 },
    { name: "Colya", email: "colya@example.com", age: 46 },
    { name: "Misha", email: "misha@example.com", age: 16 },
    { name: "Ashan", email: "ashan@example.com", age: 99 },
    { name: "Rafshan", email: "rafshan@example.com", age: 11 },
    1,
    2,
    1990,
    85,
    24,
    "Vasya",
    "colya@example.com",
    "Rafshan",
    "ashan@example.com",
    true,
    false,
    [
        [
            [
                [
                    1,
                    2,
                    1990,
                    85,
                    24,
                    "Vasya",
                    "colya@example.com",
                    "Rafshan",
                    "ashan@example.com",
                    true,
                    false,
                    [{ name: "Rafshan", email: "rafshan@example.com", age: 11 }],
                ],
            ],
        ],
    ],
];
function arrayNormalize(arr, scheme, transform) {
    if (transform === void 0) { transform = false; }
    if (scheme === "string") {
        return normalizeString(arr, transform);
    }
    if (scheme === "float") {
        return normalizeFloat(arr, transform);
    }
    if (scheme === "int") {
        return normalizeInt(arr, transform);
    }
    if (scheme === "number") {
        return normalizeNumber(arr, transform);
    }
    if (scheme === "bool") {
        return normalizeBool(arr, transform);
    }
    if (scheme === "array") {
        return normalizeArray(arr, transform);
    }
    if (scheme === "function") {
        return normalizeFunction(arr, transform);
    }
    if (typeof scheme === "object") {
        return normalizeObject(arr, scheme, transform);
    }
    return [];
}
function isString(str) {
    return typeof str === "string";
}
function normalizeString(arr, transform) {
    if (transform === void 0) { transform = false; }
    if (transform) {
        arr = arr.map(function (el) {
            if (typeof el === "number" || typeof el === "string") {
                return String(el);
            }
        });
    }
    return arr.filter(isString);
}
function normalizeNumber(arr, transform) {
    if (transform === void 0) { transform = false; }
    if (transform) {
        arr = arr.map(function (el) {
            var numberValue = Number(el);
            if (!Number.isNaN(numberValue)) {
                return numberValue;
            }
        });
    }
    return arr.filter(function (el) { return typeof el === "number"; });
}
function normalizeInt(arr, transform) {
    if (transform === void 0) { transform = false; }
    if (transform) {
        arr = arr.map(function (el) { return parseInt(String(el)); });
    }
    return arr.filter(function (el) { return typeof el === "number" && Number.isInteger(el); });
    ;
}
function normalizeFloat(arr, transform) {
    if (transform === void 0) { transform = false; }
    if (transform) {
        return (arr = arr.map(function (el) { return parseFloat(String(el)); }));
    }
    return arr.filter(function (el) { return typeof el === "number" && !Number.isInteger(el); });
    ;
}
function normalizeBool(arr, transform) {
    if (transform === void 0) { transform = false; }
    if (transform) {
        arr = arr.map(function (el) { return Boolean(el); });
    }
    return arr.filter(function (el) { return typeof el === "boolean"; });
}
function normalizeArray(arr, transform) {
    if (transform === void 0) { transform = false; }
    if (transform) {
        arr = arr.map(function (el) { return Array.isArray(el) ? el : [el]; });
    }
    return arr.filter(function (el) { return Array.isArray(el); });
}
function normalizeFunction(arr, transform) {
    if (transform === void 0) { transform = false; }
    if (transform) {
        arr = arr.map(function (el) { return new Function(String(el)); });
    }
    return arr.filter(function (el) { return el instanceof Function; });
}
function normalizeObject(arr, scheme, transform) {
    if (transform === void 0) { transform = false; }
    var arrOfNormalizedObject = [];
    var arrOfObj = arr.filter(function (el) { return typeof el === "object" && el !== null; });
    for (var _i = 0, arrOfObj_1 = arrOfObj; _i < arrOfObj_1.length; _i++) {
        var obj = arrOfObj_1[_i];
        var normalizedObject = {};
        for (var key in scheme) {
            if (obj.hasOwnProperty(key)) {
                var value = obj[key];
                var resultOfNormalizeValues = arrayNormalize([value], scheme[key], transform);
                if (resultOfNormalizeValues.length > 0) {
                    normalizedObject[key] = resultOfNormalizeValues;
                }
            }
        }
        if (Object.keys(normalizedObject).length > 0) {
            arrOfNormalizedObject.push(normalizedObject);
        }
    }
    return arrOfNormalizedObject;
}
var result1 = arrayNormalize(testData4, "string"); // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
var result2 = arrayNormalize(testData4, "string", true); // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
var result3 = arrayNormalize(testData4, { age: "int" }); // []
var result4 = arrayNormalize(testData4, { age: "int" }, true); // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]
// let result3 = arrayNormalize(testData4, { email: "string" });
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4[0]);
