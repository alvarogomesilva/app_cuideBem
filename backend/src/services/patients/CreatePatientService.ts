import Prisma from "../../prisma";

interface Patient {
    name: string;
    photo: string;
    birth: string;
    caregiver_id: string;
    user_id: string;
}

const CreatePatientService = async ({ name, photo, birth, user_id, caregiver_id }: Patient) => {
    if (!name) return { error: "Name is required!" }
    if (!birth) return { error: "Birth is required!" }
    if (!user_id) return { error: 'User invalid!' }
    if (!caregiver_id) return { error: 'Caregiver is required!' }

    const patient = await Prisma.patient.create({
        data: { name, photo, birth, caregiver_id, user_id }
    })

    return patient
}

export default CreatePatientService;