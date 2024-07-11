type Article = {
    title: string;
    text: string;
};

type Rule = {
    key: keyof Article;
    rule: 'like' | 'sLike' | 'eLike' | 'regExp';
    params: (string | RegExp)[];
};

const articles: Article[] = [
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

const FILTER_OPERATORS = {
    AND: 'AND' as const,
    OR: 'OR' as const
};

const textLikeRule: Rule = { key: 'text', rule: 'like', params: ['mollis'] };
const titleStartLikeRule: Rule = { key: 'title', rule: 'sLike', params: ['ve'] };
const titleEndLikeRule: Rule = { key: 'title', rule: 'eLike', params: ['ur'] };
const textRegExpRule: Rule = { key: 'text', rule: 'regExp', params: [new RegExp('[e]{2}')] };

type RuleHandler = (params: (string | RegExp)[], value: string) => boolean;

const handlerLikeRule: RuleHandler = (params, value) => {
    return params.some(param => typeof param === 'string' && value.includes(param));
};

const handlerSLikeRule: RuleHandler = (params, value) => {
    return params.some(param => typeof param === 'string' && value.startsWith(param));
};

const handlerELikeRule: RuleHandler = (params, value) => {
    return params.some(param => typeof param === 'string' && value.endsWith(param));
};

const handlerRegExpRule: RuleHandler = (params, value) => {
    return params.some(param => param instanceof RegExp && param.test(value));
};

const ruleHandlers: { [key in Rule['rule']]: RuleHandler } = {
    'like': handlerLikeRule,
    'sLike': handlerSLikeRule,
    'eLike': handlerELikeRule,
    'regExp': handlerRegExpRule,
};

const myFilter = (handlers: typeof ruleHandlers) => 
    (items: Article[], rules: Rule[], operator: typeof FILTER_OPERATORS[keyof typeof FILTER_OPERATORS] = FILTER_OPERATORS.OR) => {
    return items.filter(item => {
        const results = rules.map(rule => {
            const { key, rule: ruleType, params } = rule;
            const value = item[key];
            const handler = handlers[ruleType];
            return handler(params, value);
        });

        if (operator === FILTER_OPERATORS.AND) {
            return results.every(result => result);
        } else {
            return results.some(result => result);
        }
    });
};

console.log(myFilter(ruleHandlers)(articles, [textLikeRule, titleEndLikeRule], FILTER_OPERATORS.OR));
// [{"title":"justo. Praesent luctus. Curabitur","text":"sapieen, gravida non, sollicitudin a,"},{"title":"ut dolor dapibus gravida.","text":"ultricies adipiscing, enim mi tempor lorem, eget mollis"},{"title":"a nunc. In at","text":"semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices"}]

console.log(myFilter(ruleHandlers)(articles, [textRegExpRule, titleStartLikeRule]));
// [{"title":"justo. Praesent luctus. Curabitur","text":"sapieen, gravida non, sollicitudin a,"},{"title":"velit eu sem. Pellentesque","text":"Aliquam auctor, velit eget laoreet posuere, enim nisl elementum"}]

console.log(myFilter(ruleHandlers)(articles, [textRegExpRule, titleEndLikeRule], FILTER_OPERATORS.AND));
// [{"title":"justo. Praesent luctus. Curabitur","text":"sapieen, gravida non, sollicitudin a,"}]




type DataItem = {
    varyLoooongIDFieldName: number;
    extremelyLooooooooooooongActiveFiedName: boolean;
};

const data: DataItem[] = [
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

const compress = (data: DataItem[]): [string[], [number, (number | boolean)][][]] => {
    const keys = Object.keys(data[0]) as (keyof DataItem)[];

    const compressedData: [number, (number | boolean)][][] = data.map(item => {
        return keys.map(key => [keys.indexOf(key), item[key]]);
    });

    return [keys.map(String), compressedData];
};

console.log(compress(data));

type TDataItemDecompressed = {
    varyLoooongIDFieldName: number;
    extremelyLooooooooooooongActiveFiedName: boolean;
};

type TCompressedData = [string[], [number, (number | boolean)][][]];

const compressedData: TCompressedData = [
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

const decompress = (compressedData: TCompressedData): TDataItemDecompressed[] => {
    const [keys, compressedItems] = compressedData;

    return compressedItems.map(item => {
        const obj: Partial<TDataItemDecompressed> = {};
        item.forEach(([index, value]) => {
            obj[keys[index]] = value;
        });
        return obj as TDataItemDecompressed; // Assert to DataItem type
    });
};

console.log(JSON.stringify(decompress(compressedData)));