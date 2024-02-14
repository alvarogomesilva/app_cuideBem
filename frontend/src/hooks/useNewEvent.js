import { useState } from "react"
import { Alert } from 'react-native'
import api from '../api'
export const useNewEvent = () => {
    const [loading, setLoading] = useState(false)

    const newEvent = async (inputs) => {
        setLoading(true)
        const { color, description, patient_id, hour, date } = inputs;
        // const [day, month, year] = date.split('/');
        // const newDate = [year, month, day].join('-');
        try {
            const response = await api.post('/events', {
                color, 
                description, 
                patient_id, 
                hour, 
                date
            })
            Alert.alert('Evento criado')
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, newEvent }
}