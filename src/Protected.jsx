import { isAuth } from "./Auth"
import { Navigate } from "react-router-dom"

export const Protected = ({children}) => isAuth() ? children : <Navigate to="/login"/>