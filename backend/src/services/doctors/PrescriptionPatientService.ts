import Prisma from "../../prisma";

interface Prescription {
    recipe: string;
    patient_id: string;
    doctor_id: string;
}

const PrescriptionPatientService = async ({ recipe, patient_id, doctor_id }: Prescription) => {

    const patient = await Prisma.prescription.create({
        data: { recipe, patient_id, doctor_id }
    })

    return patient
}

export default PrescriptionPatientService;