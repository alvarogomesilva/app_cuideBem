import Prisma from "../../prisma"

const ListEventsService = async ({ patient_id }: { patient_id: string }) => {
    if (!patient_id) return { messageError: 'Patient invalid!' }

    const events = await Prisma.event.findMany({
        where: { patient_id }
    })

    return events
}

export default ListEventsService