import React from 'react'
import { GITHUB_URL } from '@/constants/constants'
import { FaGithub, FaMailBulk } from 'react-icons/fa'
import { RiVisaLine } from 'react-icons/ri'
const Footer = () => {
    return (
        <footer className="bg-black h-48 flex justify-center items-center">
            <div className="flex flex-col">
                <ul className="flex justify-center mb-3">
                    <li className="mx-1">
                        <img src={'/assets/cardIcon/visa.svg'} alt="visa" />
                    </li>
                    <li className="mx-1">
                        <img src={'/assets/cardIcon/master.svg'} alt="master" />
                    </li>
                    <li className="mx-1">
                        <img src={'/assets/cardIcon/amex.svg'} alt="amex" />
                    </li>
                    <li className="mx-1">
                        <img src={'/assets/cardIcon/pdinner.svg'} alt="pdinner" />
                    </li>
                    <li className="mx-1">
                        <img src={'/assets/cardIcon/paypal.svg'} alt="paypal" />
                    </li>
                </ul>
                <div className="flex justify-center">
                    <a href={GITHUB_URL}>
                        <FaGithub className="text-[40px] m-2 text-white" />
                    </a>
                    <a href={`mailto:${GITHUB_URL}`}>
                        <FaMailBulk className="text-[40px] m-2 text-white" />
                    </a>
                </div>
                <div className="flex items-center">
                    <p className="font-thin text-lg m-2">SUNGJEEN</p>
                    <p className="font-thin text-lg">© 2023</p>
                    <p className="font-thin text-lg m-2">SJSHOP</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer