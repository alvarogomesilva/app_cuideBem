import Prisma from "../../prisma";

const ListPatientService = async ({ user_id }: { user_id: string }) => {
    if (!user_id) return { messageError: 'User invalid!' }

    let patients = null; 
    const user = await Prisma.user.findFirst({
        where: { id: user_id }
    })

    if (user.role_id === 1) {
        patients = await Prisma.patient.findMany() 

    } else {
        patients = await Prisma.patient.findMany({
            where: { user_id }
        })

    }


    return patients

}

export default ListPatientService;