import api from '../api'
import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loadingUser, setLoadingUser] = useState(true)

    // Função que verifica se existe algum usuário logado
    // ===================================================
    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('@token')
            if (storageUser) {
                const response = await api.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${storageUser}`
                    }
                })
                .catch(() => setUser(null)) 
                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`
                setUser(response.data)
                setLoadingUser(false)
            }

            setLoadingUser(false)
        }

        loadStorage()
    }, [])

    // Função de autenticação
    // =======================
    async function signIn(email, password) {
        setLoadingAuth(true)
        try {
            
            const response = await api.post('/login', { email, password })
            const { token } = response.data
            setUser(response.data)
            await AsyncStorage.setItem('@token', token)
            api.defaults.headers['Authorization'] = `Bearer ${token}`
            
        } catch (error) {
            Alert.alert('Email/senha incorretos!')
        }
        finally {
            setLoadingAuth(false)
        }
    }

    async function signOut() {
        await AsyncStorage.clear()
            .then(() => setUser(null))
    }

    const values = {
        signed: !!user,
        user,
        loadingAuth,
        loadingUser,
        signIn,
        signOut
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
} 
