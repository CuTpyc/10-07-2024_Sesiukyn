type TChannelReturn = {
    name: string
}

function getChannel(name: string = 'Standart'): TChannelReturn{
    return {name: 'SomeText'}
}

getChannel('NotStandart')

type TChannelFunc = (name: string) => TChannelReturn

const getSome:TChannelFunc = (name) => {
    return {name}
}

const getNum = (...numbers: number[]) => {
    return numbers
}

// перегрузка функций

function getCar(name: string): string
function getCar(name: string, price: number): string
function getCar(name: string, price?: number): string{
    return price ? `${name}, ${price}` : `${name}`
}

getCar('bmw')
getCar('bmw', 100000)