import Prisma from "../../prisma";

interface Record {
    id_record: string;
    title: string;
    description: string;
    patient_id: string;
    doctor_id: string;
}
const UpdateRecordPatientService = async ({ 
    id_record, title, description, patient_id, doctor_id }: Record) => {

    const alredyPrescription = await Prisma.record.findFirst({
        where: { id: id_record }
    })

    if (alredyPrescription) {
        const patient = await Prisma.record.update({
            where: { id: id_record },
            data: { title, description, patient_id, doctor_id }
        })

        return patient
    }


    
}

export default UpdateRecordPatientService;