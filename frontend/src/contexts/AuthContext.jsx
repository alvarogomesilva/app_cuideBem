import api from '../api'
import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native'
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

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

    // Função de autenticação do Cuidador
    // =======================
    async function signInCaregiver(email, password) {
        setLoadingAuth(true)
        try {

            const response = await api.post('/login', { email, password })
            const { token, role_id } = response.data
            if (role_id !== 3) {
                Toast.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Mensagem',
                    textBody: 'Usuario inválido!',
                    autoClose: 2000,
                });
            } else {
                setUser(response.data)
                await AsyncStorage.setItem('@token', token)
                api.defaults.headers['Authorization'] = `Bearer ${token}`
            }


        } catch (error) {
            Alert.alert('Email/senha incorretos!')
        }
        finally {
            setLoadingAuth(false)
        }
    }

    async function signInGuardian(email, password) {
        setLoadingAuth(true)
        try {

            const response = await api.post('/login', { email, password })
            const { token, role_id } = response.data
            if (role_id !== 2) {
                Toast.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Mensagem',
                    textBody: 'Usuario inválido!',
                    autoClose: 2000,
                });
            } else {
                setUser(response.data)
                await AsyncStorage.setItem('@token', token)
                api.defaults.headers['Authorization'] = `Bearer ${token}`
            }


        } catch (error) {
            Alert.alert('Email/senha incorretos!')
        }
        finally {
            setLoadingAuth(false)
        }
    }

    async function signInDoctor(email, password) {
        setLoadingAuth(true)
        try {

            const response = await api.post('/login', { email, password })
            const { token, role_id } = response.data
            if (role_id !== 1) {
                Toast.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Mensagem',
                    textBody: 'Usuario inválido!',
                    autoClose: 2000,
                });
            } else {
                setUser(response.data)
                await AsyncStorage.setItem('@token', token)
                api.defaults.headers['Authorization'] = `Bearer ${token}`
            }


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
        signInCaregiver,
        signInGuardian,
        signInDoctor,
        signOut
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
} 
