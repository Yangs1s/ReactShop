import React from 'react'

interface ButtonType {
    children: React.ReactNode
}

const Button = ({ children }: ButtonType) => {
    return (
        <button className="bg-slate-700 dark:bg-slate-300 text-white dark:text-slate-700 p-4 rounded-lg">
            {children}
        </button>
    )
}

export default Button
