type TIsNumber<T> = T extends number ? 'yes' : 'no'

type Type1 = TIsNumber<string>
type Type2 = TIsNumber<number>

type TBrand = 'bmw' | 'mclaren' | 'mercedes'
type TPrice = '$111' | '$222' | '$333'

type TCar = `${TBrand} ${TPrice}`

const car1:TCar = 'mercedes $111'