import Prisma from "../../prisma";

interface Record {
    patient_id: string;
    doctor_id: string;
}

const ListRecordPatientService = async ({patient_id, doctor_id}: Record) => {
    if (!patient_id) return {error: 'Patient invalid'}

    const record = await Prisma.record.findFirst({
        where: { patient_id, doctor_id}
    })

    return record
}

export default ListRecordPatientService