import Prisma from "../../prisma";

interface Record {
    title: string;
    description: string;
    patient_id: string;
    doctor_id: string;
}

const RecordPatientService = async ({title, description, patient_id, doctor_id}: Record) => {
    
    const record = await Prisma.record.create({
        data: {title, description, patient_id, doctor_id}
    })

    return record
}

export default RecordPatientService