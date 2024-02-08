import Prisma from "../../prisma";

interface Record {
    id_record: string;
    title: string;
    initial_date: string;
    final_date: string;
    description: string;
    patient_id: string;
    doctor_id: string;
}
const UpdateRecordPatientService = async ({ 
    id_record, title, initial_date, final_date, description, patient_id, doctor_id }: Record) => {

    const alredyPrescription = await Prisma.record.findFirst({
        where: { id: id_record }
    })

    if (alredyPrescription) {
        const patient = await Prisma.record.update({
            where: { id: id_record },
            data: { title, initial_date, final_date, description, patient_id, doctor_id }
        })

        return patient
    }


    
}

export default UpdateRecordPatientService;