import { useEffect, useState } from 'react'
import { UserService } from '../../api/services/User'
import Navbar from '../../components/Navbar'
import UseFetch from '../../hooks/useFetch'
import './users.css'
import { useNavigate } from 'react-router-dom'
import { useThemeContext } from '../../theme/BtnThemeContext'

interface UserType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
}

function Users() {
  const { data } = UseFetch(UserService)
  const [userData, setUserData] = useState<UserType[]>([]);
  const navigate = useNavigate()
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


  return (
    <div className={`main ${theme === "light" ? "dark" : ""}`}>
      <Navbar />
      <main className='continer'>
        <div className={`table-title`}>Users</div>
        <table className={`table ${theme === "light" ? "dark" : ""}`}>
          <thead className={`thead-item`}>
            <tr>
              <th>id</th>
              <th>first name</th>
              <th>last name</th>
              <th>email</th>
              <th>username</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(user => (
              <tr key={user.id}>
                <td style={{ textAlign: 'center', cursor: 'pointer' }}>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                  onClick={() => navigate(`/user/${user.id}`)}
                >Kirish</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default Users;
