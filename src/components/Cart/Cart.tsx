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
                <table className="m-auto desktop:w-max tablet:w-3/4 mobile:w-3/4 mobile:mx-auto mb-12">
                    <thead className="border-[3px] desktop:w-[100%] border-blue-400 dark:border-red-400">
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
                    <tbody className="w-auto h-auto">
                        {state.map((item) => (
                            <tr
                                className="border-[3px] border-blue-400 dark:border-red-400 text-center mobile:h-[100px] "
                                key={item.id}
                            >
                                <td className="border-[3px] dark:border-red-400 border-blue-400 desktop:w-52 desktop:h-52 desktop:p-3 mobile:p-2">
                                    <img
                                        src={item.image}
                                        alt={'product_img'}
                                        className="desktop:h-52 desktop:w-52 mobile:w-auto mobile:h-auto"
                                    />
                                </td>
                                <td className="border-[3px] mobile:text-xs dark:border-red-400 border-blue-400 w-52 h-32 p-2">
                                    {item.title}
                                </td>
                                <td className="border-[3px] dark:border-red-400 border-blue-400 w-32 text-lg">
                                    {item.price * item.amount}$
                                </td>
                                <td className="w-36 h-52 flex items-center justify-center mobile:w-auto mobile:h-auto mobile:m-1 mobile:my-10">
                                    <button
                                        className="w-8 h-8 bg-slate-700 rounded-sm flex justify-center items-center mobile:w-4 mobile:h-4"
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        <span>+</span>
                                    </button>
                                    <span className="m-3 font-semibold text-lg mobile:text-sm">
                                        {item.amount}
                                    </span>
                                    <button
                                        className="w-8 h-8 bg-slate-700 rounded-sm flex justify-center items-center mobile:w-4 mobile:h-4"
                                        onClick={() => handleRemoveFromCart(item.id)}
                                    >
                                        <span className="">-</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="border-[3px] border-blue-400 dark:border-red-400 w-[100%]">
                        <tr>
                            <th>TOTALS:</th>
                            <td className="text-right ml-auto w-[100%] font-bold text-2xl flex p-3">
                                ${ToTal(state).toFixed(2)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    )
}

export default memo(Cart)
