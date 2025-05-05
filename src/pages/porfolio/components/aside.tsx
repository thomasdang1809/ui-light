import { NavLink } from "react-router-dom"


const Aside = () => {
    return (
        <aside className="aside">
            <div className="user-info">
                <img className="avatar" src="../../src/assets/images/thomas/thomas_avatar.png" alt="" />
                <h6>Thomas Dang</h6>
                <p>UI/UX Designer</p>
            </div>
            <nav className="nav">
                <ul className="menu">
                    <li className="menu-item">
                        <NavLink 
                            to="about" 
                            className={({ isActive }) => isActive ? "menu-link active " : "menu-link"}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink 
                            to="skills" 
                            className={({ isActive }) => isActive ? "menu-link active " : "menu-link"}
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="projects" className={({ isActive }) => isActive ? "menu-link active " : "menu-link"}>Projects</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink 
                            to="history"
                            className={({ isActive }) => isActive ? "menu-link active " : "menu-link"}
                        >
                            Working History
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink 
                            to={"activities"} 
                            className={( {isActive} ) => isActive ? "menu-link active" : "menu-link"}
                        >
                            Activities
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="contact-info">
                <div>Mobile Phone : 0792958487</div>
                <div>Email: thomasdang1809@gmail.com</div>
            </div>

        </aside>
    )
}

export default Aside