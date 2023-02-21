import { ACCESSORY_URL, FASHION1_URL, FASHION2_URL, IPHONE_URL } from '@/constants/constants'

type CarouselType = {
    id: string
    url: string
    category: string
}[]
export const CarouselList: CarouselType = [
    {
        id: 'carosel_1_D',
        url: IPHONE_URL,
        category: 'digital',
    },
    {
        id: 'carosel_2_C',
        url: FASHION1_URL,
        category: 'fashion',
    },
    {
        id: 'carosel_3_B',
        url: FASHION2_URL,
        category: 'fashion',
    },
    {
        id: 'carosel_4_A',
        url: ACCESSORY_URL,
        category: 'accessory',
    },
]
