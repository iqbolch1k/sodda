import Navbar from "../../components/Navbar"
import './Home.css'
import { useThemeContext } from "../../theme/BtnThemeContext"

function Home() {
  const {theme} = useThemeContext()
  return (
    <div className={`home ${theme === "light" ? "dark" : ""}`}>
        <Navbar/>
        <div className="continer">
          <h1>home</h1>
        </div>
    </div>
  )
}

export default Home