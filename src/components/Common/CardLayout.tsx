import React from 'react'
import { Link } from 'react-router-dom'

type CardLayoutProps = {
    title: string
    price: number
    image: string
}

const CardLayout = ({ image, title, price }: CardLayoutProps) => {
    return (
        <li className="m-2  w-96 h-[100%] flex flex-col bg-white border-slate-800 border ">
            <figure className=" w-44 h-[300px] m-auto mb-7">
                <img src={image} alt="product_img" className="h-[100%] w-max pt-9 " />
            </figure>

            <div className="flex flex-col w-[100%] text-black h-[100px] dark:bg-slate-800 bg-slate-100 dark:shadow-slate-500 shadow-sm px-5 py-5">
                <span className="text-gray-400 font-medium text-sm dark:text-gray-200 h-auto">
                    {title}
                </span>
                <p className="font-bold dark:text-white">{price}$</p>
            </div>
        </li>
    )
}

export default CardLayout
