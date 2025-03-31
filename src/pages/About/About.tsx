import Navbar from '../../components/Navbar'
import { useThemeContext } from '../../theme/BtnThemeContext'
import './about.css'

function About() {
  const {theme} = useThemeContext()
  return (
    <div className={`home ${theme === "light" ? "dark" : ""}`}>
        <Navbar/>
        <div className="continer">
          <h1>About</h1>
        </div>
    </div>
  )
}

export default About