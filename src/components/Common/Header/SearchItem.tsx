import { useProducts } from '@/zustand/useProducts'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link, useNavigate } from 'react-router-dom'

const SearchItem = () => {
    const [searchValue, setSearchValue] = useState<string>('')

    const list = useProducts((state) => state.list)
    const fetch = useProducts((state) => state.fetchModes)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
    }, [])

    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setSearchValue(event.target.value)
    }

    const ItemArray = Object.entries(list)
    const filteredItem = ItemArray.filter((keyword) => {
        return keyword[1].title
            .replace(' ', '')
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase().replace(' ', ''))
    })

    return (
        <>
            <div className="m-auto flex w-96 h-max">
                <input
                    className="h-12 w-96 text-black pl-3"
                    placeholder="물건 찾기"
                    value={searchValue}
                    onChange={onChangeSearch}
                    type="text"
                />
                {searchValue.length > 0 ? (
                    <ul className="flex flex-col overflow-y-scroll h-[200px] absolute top-[65px] w-96 bg-white z-10 text-black">
                        {filteredItem.map((item) => (
                            <Link
                                to={`/products/${item[1].id}`}
                                state={item[1]}
                                onClick={() => setSearchValue('')}
                            >
                                <li className="flex w-max  h-[30px]" key={item[1].id}>
                                    {item[1].title}
                                </li>
                            </Link>
                        ))}
                    </ul>
                ) : (
                    <div className="hidden"></div>
                )}
            </div>
        </>
    )
}

export default SearchItem
