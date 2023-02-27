import { CartItemProps, useCart } from '@/zustand/useCart'
import React from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'

const CartItem = () => {
    let cartStorage: any = localStorage.getItem('cart')
    const list: CartItemProps[] = JSON.parse(cartStorage)
    const cartItem = useCart((state) => state.cartItems)
    const addToCart = useCart((state) => state.addToCart)
    const removeFromCart = useCart((state) => state.removeFromCart)
    const increamentQunatity = useCart((state) => state.incrementCartItemQuantity)
    const decreamentQunatity = useCart((state) => state.decrementCartItemQuantity)

    const totalPrice = (listItem: CartItemProps[]) => {
        return listItem.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    }
    return (
        <section className="h-screen mobile:w-[100%]">
            <h1 className="mobile:w-[100%] mobile:text-center text-3xl font-extrabold flex justify-center my-9">
                CART
            </h1>
            <ul className="tablet:w-[100%] mobile:w-max mobile:flex mobile:items-center desktop:w-max mobile:flex-col m-auto">
                {cartItem.map((item) => (
                    <li
                        className="flex desktop:w-full bg-slate-300 dark:bg-slate-500 m-3 p-2 rounded-lg tablet:w-[70%] mobile:w-[300px]"
                        key={item.title}
                    >
                        <figure className="w-[200px] h-[200px] desktop:mr-5 mobile:mr-5 ">
                            <img src={item.image} alt="상품 이미지" className="w-[100%] h-[100%]" />
                        </figure>
                        <div className="flex flex-col w-[100%]">
                            <h1 className="text-xl font-bold tablet:w-[80%] mobile:text-xs tablet:text-lg desktop:text-xl">
                                {item.title}
                            </h1>
                            <span className="mt-24">{item.price * item.quantity}$</span>
                            <div className="flex">
                                <button onClick={() => increamentQunatity(item.id)}>
                                    <FaPlusCircle />
                                </button>
                                <span className="m-3">{item.quantity}</span>
                                <button onClick={() => decreamentQunatity(item.id)}>
                                    <FaMinusCircle />
                                </button>
                                <button
                                    className="ml-auto mr-3"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    삭제
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
                <div className="pl-3 text-lg">
                    <span className="text-2xl font-bold">TOTAL:$</span>
                    <strong className="text-2xl">{totalPrice(cartItem)}</strong>
                </div>
            </ul>
        </section>
    )
}

export default CartItem
