import { useProducts } from '@/zustand/useProducts'
import React, { useCallback, useEffect, useState } from 'react'
import { FaMinus, FaMinusSquare, FaRegPlusSquare } from 'react-icons/fa'
import { Params, useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Button from '../Common/Button/Button'
import { useCart } from '@/zustand/useCart'
import { ProductsType } from '@/typing'
import useStore from '@/zustand/useTest'
import useCartItems from '@/zustand/useTest'

export type CartItemType = {
    id: number
    image: string
    price: number
    title: string
    amount: number
}
export default function Detail() {
    const location = useLocation()
    const addToCart = useCart((state) => state.addToCart)
    const cartItem = useCart((state) => state.cartItems)

    // const saved: any = localStorage.getItem('cartStorage')
    // const [cartItems, setCartItems] = useState<CartItemType[]>(
    //     JSON.parse(saved) === null ? [] : JSON.parse(saved)
    //     // localstorage가 null값일때는 빈배열을 리턴 아니면 있는 내용 그대로
    //     // 설정을 해놓지 않는다면 카트가 읽지를 못함
    // )

    // const handleAddToCart = (clickedItem: CartItemType) => {
    //     setCartItems((prev) => {
    //         const isItemInCart = prev.find((item) => item.id === clickedItem.id)
    //         /// click한 아이템의 아이디가 카트 배열에 있는지 확인해야한다.
    //         /// 있다면 그 내용을 찾아낸다.
    //         // 아이템이 있다면, 제품 정보 및 수량이 리턴 아니면 그냥 있는 그대로
    //         if (isItemInCart) {
    //             return prev.map((item) =>
    //                 item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
    //             )
    //         }
    //         return [...prev, { ...clickedItem, amount: 1 }]
    //         // 아예 빈카트(undefined)상태일떄는 새로운 제품들은 append되는식
    //         // 수량은 1개만 추가
    //     })
    // }

    // // 카트에 담기는 데이터들 유지.
    // useEffect(() => {
    //     localStorage.setItem('cartStorage', JSON.stringify(cartItems))
    // }, [cartItems])
    return (
        <section className="w-screen h-screen ">
            <span className=" m-12 flex">{`${location.state.category} > ${location.state.title}`}</span>
            <div id={'container'} className="flex flex-col justify-center items-center p-5">
                <div
                    className="flex w-[800px] h-[600px] justify-center items-center dark:border-white border-black border"
                    id={'wrapper'}
                >
                    <figure className=" mr-10">
                        <img src={location.state.image} alt="img" className="w-[420px] h-[400px]" />
                    </figure>
                    <div className="flex flex-col justify-center w-72 h-[100%]">
                        <span id={'title'} className="text-2xl font-semibold">
                            {location.state.title}
                        </span>
                        <span
                            id={'description'}
                            className="flex items-center font-medium text-base my-3 h-auto overflow-hidden text-ellipsis break-words"
                        >
                            {location.state.description}
                        </span>
                        <div className="flex mb-3 ">
                            {/* <button
                                className="bg-slate-700 dark:bg-slate-300 text-white dark:text-slate-700 p-4 rounded-lg"
                                onClick={() => handleAddToCart(location.state)}
                            >
                                장바구니에 담기
                            </button> */}
                            <button
                                className="bg-slate-700 dark:bg-slate-300 text-white dark:text-slate-700 p-4 rounded-lg"
                                onClick={() => addToCart(location.state)}
                            >
                                장바구니에 담기
                            </button>

                            <Link
                                to={'/cart'}
                                className="mx-3 bg-slate-700 dark:bg-slate-300 text-white dark:text-slate-700 p-4 rounded-lg "
                            >
                                카트로 이동
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
