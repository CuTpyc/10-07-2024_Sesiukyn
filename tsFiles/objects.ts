type TUser = {
    name: string
    age: number
}

type TAdress = {
    city: string
    country: string
}

const adress: TAdress = {
    city: 'Zaporizhzhya',
    country: 'Ukrain'
}

const user: TUser = {
    name: 'sasha',
    age: 24
}

let common: TUser & TAdress

common = {
    ...user,
    ...adress
}