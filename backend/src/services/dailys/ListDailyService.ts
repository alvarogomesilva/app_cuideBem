import Prisma from "../../prisma";

interface Daily{
    patient_id: string;
    date: string;
}

const ListDailyService =  async ({patient_id, date}: Daily) => {
    if (!patient_id) return {error: 'Patient invalid!'}
    if (!date) return {error: 'Date invalid!'}

    const daily = await Prisma.daily.findMany({
        where: { patient_id, date: date }
    })

    return daily
}

export default ListDailyService