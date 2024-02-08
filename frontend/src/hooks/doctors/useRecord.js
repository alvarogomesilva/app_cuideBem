import { useState } from 'react'
import api from '../../api'

export const useRecord = () => {
    const [loading, setLoading] = useState(false)

    const handleRecord = async (inputs) => {
        setLoading(true)
        try {
            await api.post('/records', inputs)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleUpdateRecord = async (inputs, id) => {
        setLoading(true)
        try {
            await api.put(`/records/${id}`, inputs)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }


    return { handleRecord, handleUpdateRecord, loading }
}