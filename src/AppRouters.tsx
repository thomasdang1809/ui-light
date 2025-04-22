import { Route, Routes } from "react-router-dom"
import Layout from "./components/layouts/Fullscreen"
import Home from "./pages/Home"
import LayoutAdmin from "./components/layouts/LayoutAdmin"
import ProductList from "./pages/admin/product/components/List"


const AppRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
            </Route>
            <Route path="/admin" element={<LayoutAdmin/>}>
                <Route path="products" element={<ProductList/>}/>
            </Route>
        </Routes>
    )
}
export default AppRouters