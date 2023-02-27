import { CarouselList } from '@/data/Carousel'
import { useProducts } from '@/zustand/useProducts'
import Carousel from 'nuka-carousel'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardLayout from '../Common/CardLayout'
import Skeleton from '../Common/Skeleton'

export default function Main() {
    const list = useProducts((state) => state.list)
    const fetch = useProducts((state) => state.fetchModes)
    const [fashion, setFashion] = useState<any[]>([])
    const [digital, setDigital] = useState<any[]>([])
    const [accessory, setAccessory] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        setLoading(true)
        try {
            fetch('https://fakestoreapi.com/products')
        } catch (error) {
            console.log(error)
        }
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        const filterFashion = Object.entries(list).filter(([key, value]) =>
            value.category === "men's clothing" ? value : ''
        )
        const filterDigital = Object.entries(list).filter(([key, value]) =>
            value.category === 'electronics' ? value : ''
        )
        const filterAccessory = Object.entries(list).filter(([key, value]) =>
            value.category === 'jewelery' ? value : ''
        )

        setFashion(filterFashion)
        setDigital(filterDigital)
        setAccessory(filterAccessory)
    }, [])
    return (
        <section className="w-auto h-auto">
            <div className="w-auto h-auto">
                <Carousel wrapAround={true} withoutControls={true} autoplay autoplayInterval={3000}>
                    {CarouselList.map((item) => (
                        <div className="flex w-auto relative" key={item.id}>
                            <Link
                                to={`/${item.category}`}
                                className="bottom-44 left-16 w-auto absolute rounded-sm bg-orange-300 border-lime-100 border h-auto p-4"
                            >
                                <span className="w-auto text-center text-white font-extrabold text-xl ">
                                    {item.category.toUpperCase()}으로
                                </span>
                            </Link>
                            <img
                                src={item.url}
                                className="w-screen h-[1000px] bg-cover"
                                alt="carousel"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            <section className="flex flex-col py-3 px-32">
                <div className="mb-3 m-auto">
                    <h1 className="text-5xl font-extrabold">SJSHOP OPEN 기념!!</h1>
                    <p className="text-xl font-medium mt-2 text-center">
                        오픈맞이 최소 10% ~ 최대 20%까지 할인!
                    </p>
                </div>

                <div className="my-10 flex flex-col justify-center items-center">
                    <h1 className="font-extrabold mb-2"> ACCESSORY </h1>
                    <ul className="flex">
                        {loading ? (
                            <ul className="flex w-max m-auto">
                                {Array.from({ length: 4 }, (v, i) => i).map((idx) => {
                                    return <Skeleton key={idx} />
                                })}
                            </ul>
                        ) : (
                            Object.entries(accessory).map(([key, value]) => (
                                <Link to={`/products/${value[1].id}`} state={value[1]}>
                                    <CardLayout
                                        price={value[1].price}
                                        title={value[1].title}
                                        image={value[1].image}
                                        key={value[1].id}
                                    />
                                </Link>
                            ))
                        )}
                    </ul>
                </div>

                <div className="my-10 flex flex-col justify-center items-center">
                    <h1 className="font-extrabold mb-2"> DIGITAL </h1>
                    <ul className="flex">
                        {loading ? (
                            <ul className="flex w-max m-auto">
                                {Array.from({ length: 4 }, (v, i) => i).map((idx) => {
                                    return <Skeleton key={idx} />
                                })}
                            </ul>
                        ) : (
                            Object.entries(digital)
                                .slice(0, 4)
                                .map(([key, value]) => (
                                    <Link to={`/products/${value[1].id}`} state={value[1]}>
                                        <CardLayout
                                            price={value[1].price}
                                            title={value[1].title}
                                            image={value[1].image}
                                            key={value[1].id}
                                        />
                                    </Link>
                                ))
                        )}
                    </ul>
                </div>

                <div className="my-10 flex flex-col justify-center items-center">
                    <h1 className="font-extrabold mb-2"> FASHION </h1>
                    <ul className="flex ">
                        {loading ? (
                            <ul className="flex w-max m-auto">
                                {Array.from({ length: 4 }, (v, i) => i).map((idx) => {
                                    return <Skeleton key={idx} />
                                })}
                            </ul>
                        ) : (
                            Object.entries(fashion).map(([key, value]) => {
                                return (
                                    <Link to={`/products/${value[1].id}`} state={value[1]}>
                                        <CardLayout
                                            price={value[1].price}
                                            title={value[1].title}
                                            image={value[1].image}
                                            key={value[1].id}
                                        />
                                    </Link>
                                )
                            })
                        )}
                    </ul>
                </div>
            </section>
        </section>
    )
}
