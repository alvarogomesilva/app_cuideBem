import Prisma from "../../prisma";

interface Patient {
    id_patient: string;
    name: string;
    photo?: string;
    birth: string;
}

const UpdatePatientService = async ({ id_patient, name, photo, birth }: Patient) => {
    if (!id_patient) return { messageError: 'Id is required!' }

    console.log(id_patient, name, photo, birth)

    const patient = await Prisma.patient.update({
        data: { name, photo, birth },
        where: { id: id_patient }
    })

    return patient
}

export default UpdatePatientService