import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useHover } from '@/zustand/useHover'
import SideBar from '@/components/SideBar/SideBar'
import { motion } from 'framer-motion'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const hover = useHover((state) => state.isHover)
    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30,
        delay: 1,
    }
    return (
        <main className="h-screen dark:text-slate-100 mobile:w-full m-0">
            <Header />
            <motion.section
                className="w-screen overflow-y-scroll bg-slate-200  dark:bg-slate-800 transition-colors duration-300"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                }}
            >
                {children}

                {hover ? <SideBar /> : null}
            </motion.section>
            <Footer />
        </main>
    )
}

export default Layout
