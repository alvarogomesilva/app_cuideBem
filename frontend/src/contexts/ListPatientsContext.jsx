import { createContext, useEffect, useState } from "react";
import api from "../api";

export const ListPatientsContext = createContext({})

export default function ListPatientsProvider({children}) {
    const [listPatients, setListPatients] = useState([])

    useEffect(() => {
        async function loadPatients() {
            try {
                const patients = await api.get('/patient')
                setListPatients(patients.data)
            } catch (error) {
                console.log(error)
            }
        }

        loadPatients()
    }, [])

    const values = {
        listPatients
    }

    return (
        <ListPatientsContext.Provider value={{ listPatients }}>
            {children}
        </ListPatientsContext.Provider>
    )
}