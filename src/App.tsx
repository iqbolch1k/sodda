import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import Users from './pages/users/Users';
import PrivateRouter from './router/PrivateRouter';
import UserProfile from './components/Profile/UserProfile';
import ThemeProvider from './theme/BtnThemeContext';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={
            <PrivateRouter>
              <Users />
            </PrivateRouter>
          } />
          <Route path='/user/:id' element={<UserProfile />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App