import { useState } from "react"
import api from '../api'
import { addDays, format } from "date-fns"
export const useNewEvent = () => {
    const [loading, setLoading] = useState(false)

    const newEvent = async (inputs) => {
        setLoading(true)
        const { color, description, patient_id, hour, date } = inputs;
        const newDate = format(addDays(date, 1), 'yyyy-MM-dd')
        try {
            const response = await api.post('/events', {
                color, 
                description, 
                patient_id, 
                hour, 
                date: newDate
            })
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, newEvent }
}