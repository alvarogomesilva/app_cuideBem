import Prisma from "../../prisma";

interface Patient {
    user_id: string;
    search?: string;
}

const ListPatientService = async ({ user_id, search }: Patient) => {
    if (!user_id) return { error: 'User invalid!' }

    let patients = null;
    const user = await Prisma.user.findFirst({
        where: { id: user_id }
    })
  
    if (user.role_id === 1) {
         
         if (search !== '') {
            patients = await Prisma.patient.findMany({
                where: { name: { contains: search } }
            })
         }
         return patients
    } else if (user.role_id === 2) {
         patients = await Prisma.patient.findMany({
            where: { user_id }
        })
        
    } else {
        patients = await Prisma.patient.findMany({
            where: { caregiver_id: user_id }
        })
    }

    return patients
}

export default ListPatientService;