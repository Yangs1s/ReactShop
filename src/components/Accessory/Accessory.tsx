import { useProducts } from '@/zustand/useProducts'
import React, { useEffect, useState } from 'react'
import CardLayout from '../Common/CardLayout'
import Skeleton from '../Common/Skeleton'
import { Link } from 'react-router-dom'

export default function Accessory() {
    const list = useProducts((state) => state.list)
    const fetch = useProducts((state) => state.fetchModes)
    const [loading, setLoading] = useState<boolean>(false)

    const LIST_LENGTH = Object.entries(list).length

    useEffect(() => {
        setLoading(true)
        try {
            fetch('https://fakestoreapi.com/products')
        } catch (error) {
            console.log(error)
        }
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <section className="w-screen p-32">
            <p className="pl-32">{'HOME' + '>' + 'ACCESSORY'}</p>
            <h1 className="font-extrabold mb-6 text-center"> ACCESSORY </h1>
            {loading ? (
                <ul className="grid grid-cols-4 gap-3 w-max m-auto">
                    {Array.from({ length: 4 }, (v, i) => i).map((idx) => {
                        return <Skeleton key={idx} />
                    })}
                </ul>
            ) : (
                <div className="">
                    <ul className="grid grid-cols-4 gap-3 w-max m-auto">
                        {Object.entries(list).map(([key, value]) => {
                            console.log(value.id)
                            const condition = value.category === 'jewelery'
                            return (
                                condition && (
                                    <Link to={`/products/${value.id}`} state={value}>
                                        <CardLayout
                                            price={value.price}
                                            title={value.title}
                                            image={value.image}
                                            key={value.id}
                                        />
                                    </Link>
                                )
                            )
                        })}
                    </ul>
                </div>
            )}
        </section>
    )
}
