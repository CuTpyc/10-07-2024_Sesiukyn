interface IUserAge {
    age: number
} 
interface IUser extends IUserAge{
    name: string
    email: string
} 


const user2: IUser = {
    email: 'awfsaw',
    name: 'sasha',
    age: 24
}