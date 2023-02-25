import { CartItemType } from '@/components/Detail/Detail'
import { create } from 'zustand'

import { devtools, persist } from 'zustand/middleware'

export interface State {
    carts: CartItemType[]

    addToCart: (products: CartItemType, amount: number) => void
}

export const useCart = create<State>()(
    persist(
        (set) => ({
            carts: [],
            addToCart: (products, amount) =>
                set((state: any) => {
                    const find = state.carts.find((one: any) => one.id === products.id)
                    console.log(find)
                    if (find === undefined) {
                        return {
                            carts: [
                                ...state.carts,
                                {
                                    id: products.id,
                                    title: products.title,
                                    price: products.price,
                                    image: products.image,
                                    amount: amount,
                                },
                            ],
                        }
                    } else if (find !== undefined) {
                        return { ...state.carts, amount: amount + 1 }
                    }
                }),
        }),
        {
            name: 'cart',
        }
    )
)
