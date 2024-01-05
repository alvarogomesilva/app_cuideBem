import { createContext, useState } from "react";
import api from '../api'
export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)


    async function handleLogin(email, password) {
        try {
            //onsole.log(emailUser, passwordUser)
            const request = await api.post('/login', { email, password })
            console.log(request.data.token)
            //const { id, name, email, photo, token } = request.data
            //console.log(request.data.token)
            //setUser({ id, name, email, photo, token })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
} 
