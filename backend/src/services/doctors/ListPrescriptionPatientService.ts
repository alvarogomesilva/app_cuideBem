import Prisma from "../../prisma"

interface Prescription {
    patient_id: string;
    doctor_id: string;
}

const ListPrescriptionPatientService = async ({patient_id, doctor_id}: Prescription) => {
    if (!patient_id) return {error: 'Patient invalid'}

    const prescription = await Prisma.prescription.findFirst({
        where: { patient_id, doctor_id}
    })

    return prescription
}

export default ListPrescriptionPatientService