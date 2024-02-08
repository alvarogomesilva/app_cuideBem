import { useState } from 'react';
import api from '../../api'

export const usePrescription = () => {
    const [loading, setLoading] = useState(false)

    const handlePrescription = async (recipe, patient) => {
        setLoading(true)
        try {
            await api.post('/prescriptions', {
                recipe: recipe,
                patient_id: patient
            })
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    };

    const handleUpdatePrescription = async (recipe, patient, id) => {
        setLoading(true)
        try {
            await api.put(`/prescriptions/${id}`, {
                recipe: recipe,
                patient_id: patient
            })
        } catch (error) {
            console.log(error);
        } setLoading(false)
    }

    return { handlePrescription, handleUpdatePrescription, loading };

}