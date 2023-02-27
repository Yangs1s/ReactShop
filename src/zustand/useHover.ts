import { create } from 'zustand'

interface HoverType {
    //타입스크립트 사용 시 필요 (js라면 지우기)
    isHover: boolean
    setHover: (isHover: boolean) => void
}

export const useHover = create<HoverType>((set) => ({
    isHover: false,
    setHover: () => {
        set((state) => ({ isHover: !state.isHover }))
    },
}))
