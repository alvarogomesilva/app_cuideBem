import Prisma from "../../prisma";

interface Patient {
    user_id: string;
    search?: string;
}

const ListPatientService = async ({ user_id, search }: Patient) => {
    if (!user_id) return { messageError: 'User invalid!' }

    let patients = null; 
    const user = await Prisma.user.findFirst({
        where: { id: user_id }
    })

    if (user.role_id === 1) {
        patients = await Prisma.patient.findMany() 

    } 
    
    if (search !== '') {
        patients = await Prisma.patient.findMany({
            where: { name: { contains: search } }
        })
    }else {
        patients = await Prisma.patient.findMany({
            where: { user_id }
        })

    }


    return patients

}

export default ListPatientService;