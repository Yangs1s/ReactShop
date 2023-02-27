import { Routes, Route } from 'react-router-dom'
import Main from '@/pages/Main'
import Layout from '@/components/Common/Layout/Layout'
import Accessory from '@/pages/Accessory'
import Fashion from '@/pages/Fashion'
import Digital from '@/pages/Digital'
import Detail from '@/components/Detail/Detail'
import Cart from './pages/Cart'
import CartItem from './components/Cart/CartItem'
const Router = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path={'/accessory'} element={<Accessory />}></Route>
                <Route path={'/fashion'} element={<Fashion />}></Route>
                <Route path={'/digital'} element={<Digital />}></Route>
                <Route path={'/products/:id'} element={<Detail />} />
                {/* <Route path={'/cart'} element={<Cart />} /> */}
                <Route path={'/cart'} element={<CartItem />} />
            </Routes>
        </Layout>
    )
}

export default Router
