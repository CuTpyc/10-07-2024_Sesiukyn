//generic in function
function entity<T>(args: T): T {
    return args
}

entity<number>(1)
entity<string>('1')

const entity2 = <T>(args: T):T => {
    return args
}

//generic in class
class Channel<T>{
    private name: T
    
    constructor(name: T){
        this.name = name
    }

    getName(): T {
        return this.name
    }
}

new Channel<string>('str')
new Channel<number>(123)

//generic in interface

interface IPair<K, V> {
    key: K
    value: V
}

const pair2: IPair<string, number> = {
    key: '1',
    value: 1
}

const pair3: IPair<number, string> = {
    key: 1,
    value: '1'
}

//generic common value

type TLength = {
    length: number
}

function getNameLength<T extends TLength>(entity: T){
    return entity.length
}
getNameLength([1, 2, 3])
getNameLength('sawgwa')