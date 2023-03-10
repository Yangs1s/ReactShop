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
            <div className=" flex desktop:m-auto desktop:w-96 mobile:m-1 mobile:w-[140px] tablet:w-[300px] h-max">
                <input
                    className="h-12 w-[100%] text-black pl-3 ml-2"
                    placeholder="물건 찾기"
                    value={searchValue}
                    onChange={onChangeSearch}
                    type="text"
                />
                {searchValue.length > 0 ? (
                    <ul className="flex flex-col overflow-y-scroll h-[200px] absolute top-[65px] desktop:w-1/4 bg-white z-10 text-black mobile:p-2">
                        {filteredItem.map((item) => (
                            <Link
                                to={`/products/${item[1].id}`}
                                state={item[1]}
                                onClick={() => setSearchValue('')}
                            >
                                <li
                                    className="flex w-full h-auto mb-3 mobile:text-xs desktop:text-sm"
                                    key={item[1].id}
                                >
                                    <p>{item[1].id}. &nbsp;</p>
                                    <p className="text-ellipsis">{item[1].title}</p>
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
