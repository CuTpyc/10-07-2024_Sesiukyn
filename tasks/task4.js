var articles = [
    { "title": "justo. Praesent luctus. Curabitur", "text": "sapieen, gravida non, sollicitudin a," },
    { "title": "quam quis diam. Pellentesque", "text": "eu odio tristique pharetra. Quisque ac" },
    { "title": "quis lectus. Nullam suscipit,", "text": "bibendum. Donec felis orci, adipiscing non, luctus sit" },
    { "title": "Cras dolor dolor, tempus", "text": "eget magna. Suspendisse tristique neque" },
    { "title": "ut dolor dapibus gravida.", "text": "ultricies adipiscing, enim mi tempor lorem, eget mollis" },
    { "title": "elit. Etiam laoreet, libero", "text": "eget metus eu erat semper rutrum." },
    { "title": "velit eu sem. Pellentesque", "text": "Aliquam auctor, velit eget laoreet posuere, enim nisl elementum" },
    { "title": "Aliquam ultrices iaculis odio.", "text": "ligula consectetuer rhoncus. Nullam velit dui, semper et," },
    { "title": "a nunc. In at", "text": "semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices" },
    { "title": "iaculis quis, pede. Praesent", "text": "mi. Aliquam gravida mauris ut mi. Duis risus" }
];
var FILTER_OPERATORS = {
    AND: 'AND',
    OR: 'OR'
};
var textLikeRule = { key: 'text', rule: 'like', params: ['mollis'] };
var titleStartLikeRule = { key: 'title', rule: 'sLike', params: ['ve'] };
var titleEndLikeRule = { key: 'title', rule: 'eLike', params: ['ur'] };
var textRegExpRule = { key: 'text', rule: 'regExp', params: [new RegExp('[e]{2}')] };
var handlerLikeRule = function (params, value) {
    return params.some(function (param) { return typeof param === 'string' && value.includes(param); });
};
var handlerSLikeRule = function (params, value) {
    return params.some(function (param) { return typeof param === 'string' && value.startsWith(param); });
};
var handlerELikeRule = function (params, value) {
    return params.some(function (param) { return typeof param === 'string' && value.endsWith(param); });
};
var handlerRegExpRule = function (params, value) {
    return params.some(function (param) { return param instanceof RegExp && param.test(value); });
};
var ruleHandlers = {
    'like': handlerLikeRule,
    'sLike': handlerSLikeRule,
    'eLike': handlerELikeRule,
    'regExp': handlerRegExpRule,
};
var myFilter = function (handlers) {
    return function (items, rules, operator) {
        if (operator === void 0) { operator = FILTER_OPERATORS.OR; }
        return items.filter(function (item) {
            var results = rules.map(function (rule) {
                var key = rule.key, ruleType = rule.rule, params = rule.params;
                var value = item[key];
                var handler = handlers[ruleType];
                return handler(params, value);
            });
            if (operator === FILTER_OPERATORS.AND) {
                return results.every(function (result) { return result; });
            }
            else {
                return results.some(function (result) { return result; });
            }
        });
    };
};
console.log(myFilter(ruleHandlers)(articles, [textLikeRule, titleEndLikeRule], FILTER_OPERATORS.OR));
// [{"title":"justo. Praesent luctus. Curabitur","text":"sapieen, gravida non, sollicitudin a,"},{"title":"ut dolor dapibus gravida.","text":"ultricies adipiscing, enim mi tempor lorem, eget mollis"},{"title":"a nunc. In at","text":"semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices"}]
console.log(myFilter(ruleHandlers)(articles, [textRegExpRule, titleStartLikeRule]));
// [{"title":"justo. Praesent luctus. Curabitur","text":"sapieen, gravida non, sollicitudin a,"},{"title":"velit eu sem. Pellentesque","text":"Aliquam auctor, velit eget laoreet posuere, enim nisl elementum"}]
console.log(myFilter(ruleHandlers)(articles, [textRegExpRule, titleEndLikeRule], FILTER_OPERATORS.AND));
var data = [
    { "varyLoooongIDFieldName": 1, "extremelyLooooooooooooongActiveFiedName": true },
    { "varyLoooongIDFieldName": 2, "extremelyLooooooooooooongActiveFiedName": false },
    { "varyLoooongIDFieldName": 3, "extremelyLooooooooooooongActiveFiedName": true },
    { "varyLoooongIDFieldName": 4, "extremelyLooooooooooooongActiveFiedName": false },
    { "varyLoooongIDFieldName": 5, "extremelyLooooooooooooongActiveFiedName": false },
    { "varyLoooongIDFieldName": 6, "extremelyLooooooooooooongActiveFiedName": false },
    { "varyLoooongIDFieldName": 7, "extremelyLooooooooooooongActiveFiedName": true },
    { "varyLoooongIDFieldName": 8, "extremelyLooooooooooooongActiveFiedName": true },
    { "varyLoooongIDFieldName": 9, "extremelyLooooooooooooongActiveFiedName": true },
    { "varyLoooongIDFieldName": 10, "extremelyLooooooooooooongActiveFiedName": true }
];
var compress = function (data) {
    var keys = Object.keys(data[0]);
    var compressedData = data.map(function (item) {
        return keys.map(function (key) { return [keys.indexOf(key), item[key]]; });
    });
    return [keys.map(String), compressedData];
};
console.log(compress(data));
var compressedData = [
    ["varyLoooongIDFieldName", "extremelyLooooooooooooongActiveFiedName"],
    [
        [[0, 1], [1, true]],
        [[0, 2], [1, false]],
        [[0, 3], [1, true]],
        [[0, 4], [1, false]],
        [[0, 5], [1, false]],
        [[0, 6], [1, false]],
        [[0, 7], [1, true]],
        [[0, 8], [1, true]],
        [[0, 9], [1, true]],
        [[0, 10], [1, true]]
    ]
];
var decompress = function (compressedData) {
    var keys = compressedData[0], compressedItems = compressedData[1];
    return compressedItems.map(function (item) {
        var obj = {};
        item.forEach(function (_a) {
            var index = _a[0], value = _a[1];
            obj[keys[index]] = value;
        });
        return obj; // Assert to DataItem type
    });
};
console.log(JSON.stringify(decompress(compressedData)));
