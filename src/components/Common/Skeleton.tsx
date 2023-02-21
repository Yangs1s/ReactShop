import React from 'react'

const Skeleton = () => {
    return (
        <li
            id={'skelton'}
            className="m-2  w-96 h-[100%] flex flex-col bg-white border-slate-800 border"
        >
            <figure className=" w-[320px] h-[300px] m-auto mb-7">
                <div className="animate-pulse w-[100%] h-[300px] bg-slate-400">&nbsp;</div>
            </figure>

            <div className="flex flex-col w-[100%] text-black h-[100px] dark:bg-slate-800 bg-slate-100 dark:shadow-slate-500 shadow-sm px-5 py-5">
                <span className="text-gray-400 font-medium text-sm bg-slate-400 dark:text-gray-200 h-auto  animate-pulse">
                    &nbsp;
                </span>
                <p className="font-bold dark:text-white my-3 bg-slate-400 animate-pulse">&nbsp;</p>
            </div>
        </li>
    )
}

export default Skeleton
