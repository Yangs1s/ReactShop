import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useHover } from '@/zustand/useHover'
import SideBar from '@/components/SideBar/SideBar'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const hover = useHover((state) => state.isHover)
    return (
        <main className="h-screen dark:text-slate-100 mobile:w-full m-0">
            <Header />
            <section className="w-auto overflow-y-scroll bg-slate-200  dark:bg-slate-800">
                {children}

                {hover ? <SideBar /> : null}
            </section>
            <Footer />
        </main>
    )
}

export default Layout
