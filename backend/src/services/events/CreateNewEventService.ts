import Prisma from "../../prisma";

interface Events {
    color: string,
    hour: string,
    description: string,
    date: string,
    patient_id: string,
    notification: string
}

const CreateNewEventService = async ({ color, hour, description, date, patient_id, notification }: Events) => {
    if (!description) return { messageError: "Description is required!" }
    if (!date) return { messageError: "Date is required!" }
    if (!patient_id) return { messageError: "Patient invalid!" }

    const events = await Prisma.event.create({
        data: { color, hour, description, date, patient_id, notification }
    })

    return events 
} 

export default CreateNewEventService;