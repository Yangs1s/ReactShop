import { useHover } from '@/zustand/useHover'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { DESKTOP_WIDTH } from '@/constants/constants'

const SideBar = () => {
    const closeSide = useHover((state) => state.setHover)
    const [value, setValue] = useState<number>(0)

    const handleSize = () => {
        setValue(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleSize)

        return () => {
            window.removeEventListener('resize', handleSize)
        }
    }, [])
    return value > DESKTOP_WIDTH ? null : (
        <motion.aside
            className="w-52 h-screen bg-slate-600 flex absolute top-16 right-0"
            onClick={() => closeSide(false)}
            initial={{ x: 50 }}
            animate={{ x: 0 }}
        >
            <div className="flex flex-col pt-3">
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
        </motion.aside>
    )
}

export default SideBar
