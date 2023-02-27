import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiDark, CiSearch } from 'react-icons/ci'
import { FaCartPlus, FaSun } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import SearchItem from './SearchItem'
import { CartItemProps, useCart } from '@/zustand/useCart'
import { useHover } from '@/zustand/useHover'
import { DESKTOP_WIDTH } from '@/constants/constants'

interface ValueType {
    width: number
    height: number
}

const Header = () => {
    const hover = useHover((state) => state.isHover)
    const setHover = useHover((state) => state.setHover)

    // dark Mode
    const [theme, setTheme] = useState(() =>
        typeof window !== 'undefined'
            ? localStorage.getItem('theme') === 'dark'
                ? 'dark'
                : 'light'
            : 'light'
    )

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('body')?.classList.add('dark')
        } else {
            document.querySelector('body')?.classList.remove('dark')
        }
    }, [theme])

    const handleClick = () => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            localStorage.setItem('theme', 'light')
            setTheme('light')
        } else {
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
        }
    }
    // width size 체크
    const [value, setValue] = useState<number>(DESKTOP_WIDTH)

    const handleSize = () => {
        setValue(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleSize)

        return () => {
            window.removeEventListener('resize', handleSize)
        }
    }, [])

    const cartItems = useCart((state) => state.cartItems)
    const totalQuantity = (listItem: CartItemProps[]) => {
        return listItem.reduce((acc, cur) => acc + cur.quantity, 0)
    }
    return (
        <header className="w-full h-22 py-1 bg-zinc-900 desktop:pl-32 tablet:w-[100%] mobile:w-[100%] tablet:justify-center">
            <div className="flex items-center mobile:w-[100%] justify-center">
                <div>
                    <Link to="/">
                        <h1 className="text-white pl-5 desktop:text-2xl font-extrabold whitespace-nowrap flex">
                            SJSHOP
                        </h1>
                    </Link>
                </div>
                <div>
                    <SearchItem />
                </div>
                <div className="flex desktop:ml-auto p-14 mobile:p-0 mobile:ml-1">
                    <div className="flex w-auto desktop:ml-10 items-center ">
                        <button
                            onClick={handleClick}
                            className="outline-none border-none mr-2 bg-inherit text-xl "
                        >
                            {theme === 'dark' ? (
                                <CiDark className="text-white" />
                            ) : (
                                <FaSun className="text-yellow-400" />
                            )}
                        </button>
                        <div className={`${value < DESKTOP_WIDTH ? 'hidden' : 'visible'}`}>
                            <Link to="fashion" className="m-2">
                                <span className="text-xl text-white font-extrabold">패션</span>
                            </Link>
                            <Link to="accessory" className="m-2">
                                <span className="text-xl text-white font-extrabold">악세사리</span>
                            </Link>
                            <Link to="digital" className="m-2">
                                <span className="text-xl text-white font-extrabold">디지털</span>
                            </Link>
                        </div>
                        <div className="relative mr-3">
                            <Link to="/cart" className="relative">
                                <FaCartPlus className="text-lg m-2 text-white" />
                                <span className="absolute bg-red-600  top-0 right-0 rounded-full w-4 h-4 text-center text-xs">
                                    {totalQuantity(cartItems)}
                                </span>
                            </Link>
                        </div>
                        <div
                            className={`m-3 ${value < DESKTOP_WIDTH ? 'visible' : 'hidden'}`}
                            onClick={() => setHover(false)}
                        >
                            <GiHamburgerMenu className="text-lg  text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
