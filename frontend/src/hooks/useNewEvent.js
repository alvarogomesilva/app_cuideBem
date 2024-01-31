import { useState } from "react"

export const useNewEvent = () => {
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState('')
    
    const newEvent = (inputs) => {
        console.log(inputs)
    }

    return { loading, newEvent }
}