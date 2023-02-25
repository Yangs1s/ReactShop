import React from 'react'

interface HeadingType {
    children: React.ReactNode
}

const Title = ({ children }: HeadingType) => {
    return <h1 className="text-6xl font-extrabold text-center">{children}</h1>
}

export default Title
