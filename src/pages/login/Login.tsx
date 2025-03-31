import { useState } from 'react'
import './login.css'
import { login } from '../../api/services/authService'
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../theme/BtnThemeContext';

interface FormData {
    username: string;
    password: string;
}

function Login() {
    const [formData, setFormData] = useState<FormData>({ username: '', password: '' })
    const navigate = useNavigate()
    const {theme} = useThemeContext()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await login(formData.username, formData.password);
            navigate('/')
        } catch (error) {
            alert("login xato!")
        }
        
    }
    return (
        <div className={`login ${theme === "light" ? "dark" : ""}`}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-card">
                    <div>
                        <label>Login</label>
                        <input
                            name="username"
                            value={formData.username}
                            placeholder="Username..."
                            onChange={handleChange}
                            type="text" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            name="password"
                            value={formData.password}
                            placeholder="Password..."
                            onChange={handleChange}
                            type="password" />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Login