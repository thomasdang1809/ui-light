import { Route, Routes } from "react-router-dom"
import Layout from "./components/layouts/Fullscreen"
import Home from "./pages/Home"
import LayoutAdmin from "./components/layouts/LayoutAdmin"
import ProductList from "./pages/admin/product/components/List"
import Landing from "./pages/game/Landing"
import LayoutPortfolio from "./components/layouts/LayoutPortfolio"
import About from "./pages/porfolio/pages/about"
import History from "./pages/porfolio/pages/history"
import Skills from "./pages/porfolio/pages/skills"
import Projects from "./pages/porfolio/pages/projects"
import Activities from "./pages/porfolio/pages/activities"


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
            <Route path="/game" element={<LayoutAdmin/>}>
                <Route path="" element={<Landing/>}/>
            </Route>
            <Route path="/portfolio" element={<LayoutPortfolio/>}>
                <Route path="" element={<About/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="skills" element={<Skills/>}/>
                <Route path="projects" element={<Projects/>}/>
                <Route path="history" element={<History/>}/>
                <Route path="activities" element={<Activities/>}/>
            </Route>
        </Routes>
    )
}
export default AppRouters