import Prisma from "../../prisma";

interface Record {
    title: string;
    initial_date: string;
    final_date: string;
    description: string;
    patient_id: string;
    doctor_id: string;
}

const RecordPatientService = async (
    {title, initial_date, final_date, description, patient_id, doctor_id}: Record) => {
    
    const record = await Prisma.record.create({
        data: {title, initial_date, final_date, description, patient_id, doctor_id}
    })

    return record
}

export default RecordPatientService