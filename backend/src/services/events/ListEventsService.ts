import Prisma from "../../prisma"

interface Event {
    patient_id: string;
    date: string;
}

const ListEventsService = async ({patient_id, date}: Event) => {
    if (!patient_id) return { messageError: 'Patient invalid!' }

    const events = await Prisma.event.findMany({
        where: { patient_id, date }
    })

    return events
}

export default ListEventsService 