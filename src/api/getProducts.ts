import axios from 'axios'
const { VITE_DATA_URL } = import.meta.env

export const fetchData = () => {
    const data = axios.get(VITE_DATA_URL)

    return data
}
