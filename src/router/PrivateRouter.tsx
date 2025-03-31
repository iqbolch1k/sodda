import { Navigate } from "react-router-dom"
import { auth } from "../api/config/tokenCofig"
import { ReactNode } from "react"

const PrivateRouter = ({ children }: { children: ReactNode }) => {
    const isAuth = auth()
    return isAuth ? children : <Navigate to={'/login'} />
}

export default PrivateRouter