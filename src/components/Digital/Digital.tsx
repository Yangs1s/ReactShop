import { useProducts } from '@/zustand/useProducts'
import React, { useEffect, useState } from 'react'
import CardLayout from '../Common/CardLayout'
import Skeleton from '../Common/Skeleton'
import { Link } from 'react-router-dom'
import Title from '../Common/Title/Title'

export default function Digital() {
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
        <section className="desktop:w-screen desktop:p-32 mobile:w-screen mobile:p-0">
            <p className="text-center mb-3">{'HOME' + '>' + 'DIGITAL'}</p>
            <Title> DIGITAL </Title>
            {loading ? (
                <ul className="grid laptop:grid-cols-3 gap-3 w-max m-auto mt-5 mobile:grid-cols-1">
                    {Array.from({ length: 6 }, (v, i) => i).map((idx) => {
                        return <Skeleton key={idx} />
                    })}
                </ul>
            ) : (
                <div className="">
                    <ul className="grid grid-cols-3 gap-3 w-max m-auto mt-5 mobile:grid-cols-1 tablet:grid-cols-2">
                        {Object.entries(list).map(([key, value]) => {
                            const condition = value.category === 'electronics'
                            return (
                                condition && (
                                    <Link to={`/products/${value.id}`} state={value} key={key}>
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
