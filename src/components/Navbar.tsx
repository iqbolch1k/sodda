import { NavLink } from "react-router-dom";
import { auth, removeToken } from "../api/config/tokenCofig";
import { useState } from "react";
import { useThemeContext } from "../theme/BtnThemeContext";
import "./navbar.css";

function Navbar() {
    const [modal, setModal] = useState<boolean>(false);
    const isAuth = auth();
    const { theme, toggleTheme } = useThemeContext();

    const handleModal = () => {
        setModal(true);
    };

    const ExithandleModal = () => {
        setModal(false);
    };
    const remonveToken = () => {
        removeToken()
    }

    return (
        <div className={`continer navbar ${theme === "light" ? "dark" : ""}`}>
            <div className="logo">
                <h1>admin</h1>
            </div>
            <div className="navbar-sidbar">
                <nav>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    {
                        isAuth ?
                            <NavLink to={'/users'}>Users</NavLink>
                            :
                            <NavLink to={'/login'}>Login</NavLink>
                    }
                </nav>
            </div>
            <div className="avatarAndBtn">
                <button onClick={toggleTheme}>
                    {theme === "light" ? "Dark" : "Light"}
                </button>
                <div>
                    <i onClick={handleModal} className="fa-solid fa-user"></i>
                </div>
            </div>
            {
                modal ?
                    <div className="proModal">
                        {
                            !isAuth ?
                                <>
                                    <p>Settings</p>
                                    <p>uzb/eng</p>
                                </>
                                :
                                <>
                                    <p>Settings</p>
                                    <p>uzb/eng</p>
                                    <p onClick={remonveToken}>Log out</p>
                                </>
                        }
                        <b onClick={ExithandleModal}>Fastening <i className="fa-regular fa-square-caret-up"></i></b>
                    </div>
                    :
                    ''
            }
        </div>
    );
}

export default Navbar;
