import Prisma from "../../prisma";

const ListPatientByUserService = async ({ user_id }: { user_id: string }) => {
    if (!user_id) return { messageError: 'User invalid!' }

    const patients = await Prisma.patient.findMany({
        where: { user_id }
    })

    return patients

}

export default ListPatientByUserService;