import Prisma from "../../prisma";

interface Prescription {
    patient_id: string;
    doctor_id: string;
}

const ListMyPrescriptionPatientService = async ({ patient_id, doctor_id }: Prescription) => {
    const prescription = await Prisma.prescription.findFirst({
        where: { patient_id, doctor_id }
    })

    return prescription;
}

export default ListMyPrescriptionPatientService