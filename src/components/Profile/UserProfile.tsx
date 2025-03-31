import { Route, Routes, useParams } from 'react-router-dom'
import './UserPro.css'
import UseFetch from '../../hooks/useFetch'
import { UserService } from '../../api/services/User'
import { useEffect, useState } from 'react'
import UserNavbar from './../../UserNavbar/navbar/UserNavbar';
import UserHome from '../../UserNavbar/Home/UserHome'
import { useThemeContext } from '../../theme/BtnThemeContext'
import NotFound from '../../pages/NotFound/NotFound'
interface UserType {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
}
const UserProfile = () => {
    const { id } = useParams()
    const { data } = UseFetch(UserService)
    const [userData, setUserData] = useState<UserType[]>([]);
    const { theme } = useThemeContext()
    useEffect(() => {
        if (Array.isArray(data)) {
            const validUsers = data.filter(user =>
                user.first_name && user.last_name && user.email && user.username
            );
            setUserData(validUsers);
        } else {
            setUserData([]);
        }
    }, [data]);
    const user = userData.find(user => user.id === Number(id))
    return (
        <div className={`userProfil ${theme === "light" ? "dark" : ""}`}>
            <UserNavbar logo={user?.username} />
            <Routes>
                <Route path="/" element={<UserHome email={user?.email} last_name={user?.last_name} first_name={user?.first_name}/>} />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default UserProfile