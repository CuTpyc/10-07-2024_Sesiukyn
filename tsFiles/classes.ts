class Car {
    name: string
    price: number
    constructor (name: string, price: number){
        this.name = name
        this.price = price
    }

    protected getInfo():string {
        return `${this.name}`
    }
}

class Bus extends Car{
    constructor (name: string, price: number){
        super(name, price)
    }
    
    test(){
        return this.getInfo()
    }
}

new Bus('BMW', 100000).test()