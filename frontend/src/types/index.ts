export interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    price:string,
    createdAt: string,
    updatedAt: string
}
export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rate: number;
    count: number;
}

export interface UserType {
    id: number,
    username: string,
    email: string,
    password: string,
    price:string,
    createdAt: string,
    updatedAt: string
    Products:ProductType[]
}

