import Prisma from "../../prisma";
import { unlink } from 'fs/promises';
import { resolve } from 'path'

interface Patient {
    id_patient: string;
    name: string;
    photo?: string;
    birth: string;
}

const UpdatePatientService = async ({ id_patient, name, photo, birth }: Patient) => {
    if (!id_patient) return { messageError: 'Id is required!' }

  
    const avatarAlredyExists = await Prisma.patient.findFirst({
        where: { id: id_patient },
        select: { photo: true }
    })

    if (avatarAlredyExists.photo !== null) {
        await unlink(resolve(__dirname, '..', '..', '..', 'uploads', avatarAlredyExists.photo))
    }

    const patient = await Prisma.patient.update({
        data: { name, photo, birth },
        where: { id: id_patient }
    })

    return patient
}

export default UpdatePatientService