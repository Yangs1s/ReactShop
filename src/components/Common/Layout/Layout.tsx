import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <main className="w-screen h-screen  dark:text-slate-100  ">
            <Header />
            <section className="h-screen overflow-y-scroll  bg-slate-200  dark:bg-slate-800">
                {children}
            </section>
            <Footer />
        </main>
    )
}

export default Layout
