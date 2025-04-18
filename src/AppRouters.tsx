import { Route, Routes } from "react-router-dom"
import Layout from "./components/layouts/Fullscreen"
import Home from "./pages/Home"


const AppRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
            </Route>
        </Routes>
    )
}
export default AppRouters