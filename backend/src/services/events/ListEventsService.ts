import Prisma from "../../prisma"

interface Event {
    patient_id: string;
}

const ListEventsService = async ({patient_id}: Event) => {
    if (!patient_id) return { messageError: 'Patient invalid!' }

    const events = await Prisma.event.findMany({
        where: { patient_id, },
        orderBy: { hour: 'asc' } 
    })

    return events
}

export default ListEventsService 