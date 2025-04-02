export interface User{
    uid: string,
    email: string,
    password: string,
    photoURL?: string,
    phone?: string,
    name: string,
    user_type: 'cuidador' | 'adulto_mayor'
}