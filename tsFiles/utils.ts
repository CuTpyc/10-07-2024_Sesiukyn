interface ICar {
    id: number
    name: string
    price: number
    yearBuilt: number
}

interface ICar2 {
    id?: number
    name?: string
    price?: number
    yearBuilt?: number
}

interface ICarCreate extends Omit<ICar, 'id'>{}
interface ICarID extends Pick<ICar, 'id'>{}
interface IOptionalCar extends Partial<ICar>{}
interface IReadOnlyCar extends Readonly<ICar>{}
type TCarRecord = Record<'name' | 'price', string | number>
interface IRequiredCar extends Required<ICar2>{}

type TGetName = () => string
type Return = ReturnType<TGetName>

type Any = Extract<'sasha' | 'vasya', 'vasya' | 'katya'>
type Any1 = Exclude<'sasha' | 'vasya', 'vasya' | 'katya'>
type NotNull = NonNullable<string | number | null | undefined>

const car: ICarCreate = {
    name: 'sawg',
    price: 1000,
    yearBuilt: 2018,
}

const car2: ICarID = {
    id: 1
}

const car3: IOptionalCar = {
    id: 1,
    name: "sawfgwa"
}

const car4: IReadOnlyCar = {
    id: 1,
    name: "sawfgwa",
    price: 10000,
    yearBuilt: 1920
}

const car5: TCarRecord = {
    name: "sawfgwa",
    price: 10000,
}

//car4.name = 'awfwsawf' error

const car6: IRequiredCar = {
    name: "sawfgwa",
    price: 10000,
    id: 0,
    yearBuilt: 0
}
