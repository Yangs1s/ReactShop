import { memo, useEffect, useState } from 'react'
import { CartItemType } from '../Detail/Detail'

const Header = [' ', 'TITLE', 'PRICE', 'QUANTITY']

const Cart = () => {
    let cartStorage: any = localStorage.getItem('cartStorage')
    const list: CartItemType[] = JSON.parse(cartStorage)
    const [state, setState] = useState<any[]>(list)

    const handleAddToCart = (clickedItem: CartItemType) => {
        setState((prev) => {
            console.log(prev)
            const isItemInCart = prev.find((item) => item.id === clickedItem.id)
            if (isItemInCart) {
                return prev.map((item) =>
                    item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
                )
            }
            return [...prev, { ...clickedItem, amount: 1 }]
        })
    }
    const handleRemoveFromCart = (id: number) => {
        setState((prev) =>
            prev.reduce((acc, item) => {
                if (item.id === id) {
                    if (item.amount === 0) return ''
                    else if (item.amount === 1) return acc
                    return [...acc, { ...item, amount: item.amount - 1 }]
                } else {
                    return [...acc, { ...item, amount: item.amount }]
                }
            }, [] as CartItemType[])
        )
    }
    useEffect(() => {
        localStorage.setItem('cartStorage', JSON.stringify(state))
    }, [state])
    const ToTal = (items: CartItemType[]) =>
        items.reduce((acc: number, item) => acc + item.amount * item.price, 0)
    return (
        <section className="w-screen h-screen">
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-extrabold w-max flex justify-center m-auto my-12">
                    CART
                </h1>
                <table className="m-auto w-max mb-12">
                    <thead className="border-[3px] w-[100%] border-blue-400 dark:border-red-400">
                        <tr className="w-max ">
                            {Header.map((item) => (
                                <th
                                    key={item}
                                    className="w-max p-2 border-[3px] border-blue-400 dark:border-red-400"
                                >
                                    {item}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((item) => (
                            <tr
                                className="border-[3px] border-blue-400 dark:border-red-400 text-center"
                                key={item.id}
                            >
                                <td className="border-[3px] dark:border-red-400 border-blue-400 w-52 h-52 p-3">
                                    <img
                                        src={item.image}
                                        alt={'product_img'}
                                        className="h-52 w-52"
                                    />
                                </td>
                                <td className="border-[3px] dark:border-red-400 border-blue-400 w-52 h-32 p-2">
                                    {item.title}
                                </td>
                                <td className="border-[3px] dark:border-red-400 border-blue-400 w-32 text-lg">
                                    {item.price * item.amount}$
                                </td>
                                <td className="w-36 h-52 flex items-center justify-center">
                                    <button
                                        className="w-8 h-8 bg-slate-700 rounded-sm flex justify-center items-center"
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        <span>+</span>
                                    </button>
                                    <span className="m-3 font-semibold text-lg">{item.amount}</span>
                                    <button
                                        className="w-8 h-8 bg-slate-700 rounded-sm flex justify-center items-center"
                                        onClick={() => handleRemoveFromCart(item.id)}
                                    >
                                        <span className="">-</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="border-[3px] border-blue-400 dark:border-red-400 w-[100%]">
                        <h1 className="text-right ml-auto w-[100%] font-bold text-2xl flex p-3">
                            TOTAL: ${ToTal(state).toFixed(2)}
                        </h1>
                    </tfoot>
                </table>
            </div>
        </section>
    )
}

export default memo(Cart)
