import Prisma from "../../prisma";

interface Patient {
    name: string;
    photo: string;
    birth: string;
    user_id: string;
}

const CreatePatientService = async ({ name, photo, birth, user_id }: Patient) => {
    if (!name) return { messageError: "Name is required!" }
    if (!birth) return { messageError: "Birth is required!" }
    if (!user_id) return { messageError: 'User invalid!' }

    const patient = await Prisma.patient.create({
        data: { name, photo, birth, user_id }
    })

    return patient 
}

export default CreatePatientService;