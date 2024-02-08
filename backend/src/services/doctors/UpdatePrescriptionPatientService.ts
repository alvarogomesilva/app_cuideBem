import Prisma from "../../prisma";

interface Prescription {
    id_prescription: string;
    recipe: string;
    patient_id: string;
    doctor_id: string;
}

const UpdatePrescriptionPatientService = async ({ 
    id_prescription, recipe, patient_id, doctor_id }: Prescription) => {

    const alredyPrescription = await Prisma.prescription.findFirst({
        where: { id: id_prescription }
    })

    if (alredyPrescription) {
        const patient = await Prisma.prescription.update({
            where: { id: id_prescription },
            data: { recipe, patient_id, doctor_id }
        })

        return patient
    }


    
}

export default UpdatePrescriptionPatientService;