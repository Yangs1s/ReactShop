import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiDark, CiSearch } from 'react-icons/ci'
import { FaSun } from 'react-icons/fa'
import SearchItem from './SearchItem'

const Header = () => {
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
    return (
        <header className="w-100 h-20 bg-zinc-900 flex items-center pl-32">
            <Link to="/">
                <h1 className="text-white pl-5 text-2xl font-extrabold whitespace-nowrap">
                    SJSHOP
                </h1>
            </Link>

            <SearchItem />
            <div className="flex ml-auto p-14">
                <button
                    onClick={handleClick}
                    className="outline-none border-none bg-inherit text-xl "
                >
                    {theme === 'dark' ? (
                        <CiDark className="text-white" />
                    ) : (
                        <FaSun className="text-yellow-400" />
                    )}
                </button>
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
        </header>
    )
}

export default Header
