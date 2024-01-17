import Prisma from "../../prisma";

interface Report {
    title: string;
    inital_date: string;
    final_date: string;
    description: string;
    recipe: string;
    patient_id: string;
}

const PrescriptionPatientService = async ({
    title,
    inital_date,
    final_date,
    description,
    recipe,
    patient_id }: Report) => {

        const patient = await Prisma.patient.update({
            data: { title, inital_date, final_date, description, recipe },
            where: { id: patient_id }
        })

        return patient
}

export default PrescriptionPatientService;