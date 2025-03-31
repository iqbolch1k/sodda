import { NavLink, useParams } from "react-router-dom"
import { useThemeContext } from "../../theme/BtnThemeContext";
import { useState } from "react";
import { removeToken } from "../../api/config/tokenCofig";

const UserNavbar = ({ logo }: { logo: string | undefined }) => {
    const [modal, setModal] = useState<boolean>(false);
    const { id } = useParams()
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
    const ShortText = (text: string, maxLength: number): string => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };
    return (
        <div className={`continer navbar ${theme === "light" ? "dark" : ""}`}>
            <div className="logo">
                <h2> {ShortText(String(logo), 9)}</h2>
            </div>
            <div className="navbar-sidbar">
                <nav>
                    <NavLink to={`/user/${id}/`}>Home</NavLink>
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
                        <p>Settings</p>
                        <p>uzb/eng</p>
                        <p onClick={remonveToken}>Log out</p>
                        <b onClick={ExithandleModal}>Fastening <i className="fa-regular fa-square-caret-up"></i></b>
                    </div>
                    :
                    ''
            }
        </div>
    )
}

export default UserNavbar