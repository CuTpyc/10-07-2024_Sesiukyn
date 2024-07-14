enum ERoles {
    ADMIN, GUEST, USER
}

const enum EColors{
    black,
    pink,
    green
}

interface IUser2 {
    role: ERoles
    color: EColors
}

const user3: IUser2= {
    role: ERoles.ADMIN,
    color: EColors.pink
}