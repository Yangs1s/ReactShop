import { CartItemType } from '@/components/Detail/Detail'
import { create } from 'zustand'

import { devtools, persist } from 'zustand/middleware'

export interface State {
    cartItems: CartItemProps[]
    addToCart: (product: CartItemProps) => void
    allRemove: () => void
    removeFromCart: (productId: number) => void
    incrementCartItemQuantity: (productId: number) => void
    decrementCartItemQuantity: (productId: number) => void
}

export type CartItemProps = {
    id: number
    image: string
    price: number
    title: string
    quantity: number
}
export const useCart = create<State>()(
    persist(
        (set) => ({
            cartItems: [],
            addToCart: (product) =>
                set((state) => {
                    const index = state.cartItems.findIndex((item) => item.id === product.id)
                    if (index !== -1) {
                        // 카트에 물건이 있으면 수량만 업데이트하게끔
                        const cartItems = [...state.cartItems]
                        cartItems[index].quantity += 1
                        return { cartItems }
                    } else {
                        // 카드가 비어있거나 선택한 아이템이 없으면 수량은 1로 추가
                        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] }
                    }
                }),
            allRemove: () =>
                set((state) => {
                    if (confirm('결제하시겠습니까?')) {
                        return { cartItems: [] }
                    } else {
                        return { cartItems: [...state.cartItems] }
                    }
                }),
            removeFromCart: (productId) =>
                set((state) => ({
                    cartItems: state.cartItems.filter((item) => item.id !== productId),
                })),
            incrementCartItemQuantity: (productId) =>
                set((state) => {
                    const index = state.cartItems.findIndex((item) => item.id === productId)
                    console.log(index)
                    if (index !== -1) {
                        const cartItems = [...state.cartItems]
                        cartItems[index].quantity += 1
                        return { cartItems }
                    } else {
                        return state
                    }
                }),
            decrementCartItemQuantity: (productId) =>
                set((state) => {
                    const index = state.cartItems.findIndex((item) => item.id === productId)
                    if (index !== -1 && state.cartItems[index].quantity > 1) {
                        const cartItems = [...state.cartItems]
                        cartItems[index].quantity -= 1
                        return { cartItems }
                    } else {
                        return state
                    }
                }),
        }),
        {
            name: 'cart',
        }
    )
)
