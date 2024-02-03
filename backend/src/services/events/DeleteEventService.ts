import Prisma from "../../prisma";

const DeleteEventService = async ({ id }: { id: string }) => {
    if (!id) return { error: 'Id inválid!' }

    const event = await Prisma.event.delete({
        where: { id }
    })

    return event

}

export default DeleteEventService;