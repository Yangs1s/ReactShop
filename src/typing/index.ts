export interface ProductsType {
    category: string
    description: string
    id: number
    price: number
    rating: {
        rate: number
        count: number
    }
    title: string
    images: string
}
