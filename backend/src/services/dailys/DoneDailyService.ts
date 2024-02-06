import Prisma from "../../prisma"

const DoneDailyService = async ({ id }: { id: string }) => {
    if (!id) return { error: 'Daily inválid!' }

    const existsDaily = await Prisma.daily.findUnique({
        where: {id}
    })

    const daily = await Prisma.daily.update({
        where: { id },
        data: { done: { set: !existsDaily.done } } // Inverte o valor atual de done

    })

    return daily
}

export default DoneDailyService