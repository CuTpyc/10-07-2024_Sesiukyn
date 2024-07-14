let array: string[]
//let array: Array<string>

array = ['1', '2', '3']

const numbers:ReadonlyArray<number> = [0, 1, 2, 3]

//numbers[0] = 2 error

type TArray = [number, string, null]
const newArr: TArray = [1, '2', null]