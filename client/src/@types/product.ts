interface IProduct {
    name: string
    price: number
    category: string
    image: string
    sizes: string[]
    colors: string[]
}

export type Product = IProduct