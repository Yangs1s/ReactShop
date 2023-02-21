import { useProducts } from '@/zustand/useProducts'
import React, { useEffect, useState } from 'react'
import { FaMinus, FaMinusSquare, FaRegPlusSquare } from 'react-icons/fa'
import { Params, useLocation, useParams } from 'react-router'

type Props = {
    id: number
}
const INFO_NUM = '1'

export default function Detail() {
    const location = useLocation()

    return (
        <section className="w-screen h-screen">
            <div
                id={'container'}
                className="flex flex-row m-auto w-96 h-auto p-6 border-black border"
            >
                <figure className="w-52">
                    <img src={location.state.image} alt="img" />
                </figure>
                <div className="flex flex-col w-60">
                    <span id={'title'} className="text-2xl">
                        {location.state.title}
                    </span>
                    <span id={'description'} className="">
                        {location.state.description}
                    </span>
                    <div className="flex mb-3">
                        <button>카트에 추가</button>
                    </div>
                    <div className="flex items-center">
                        <button className="outline-none border-none bg-inherit">
                            <FaRegPlusSquare />
                        </button>
                        3
                        <button className="outline-none border-none bg-inherit">
                            <FaMinusSquare />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
