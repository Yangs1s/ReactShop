import axios from 'axios'
import { create } from 'zustand'

interface ModeState {
    list: Object
    fetchModes: (url: string) => void
}

export const useProducts = create<ModeState>((set) => ({
    list: {},
    fetchModes: async (url) => {
        const response = await axios.get(url).then((data) => data.data)
        set({ list: await response })
    },
}))
