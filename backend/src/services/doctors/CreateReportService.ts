import Prisma from "../../prisma";

interface Report {
    title: string;
    inital_date: string;
    final_date: string;
    description: string;
    patient_id: string;
}

const CreateReportService = async ({
    title,
    inital_date,
    final_date,
    description,
    patient_id }: Report) => {

    if (!title) return { messageError: 'Title is required!' }
    if (!inital_date) return { messageError: 'Initial date is required' }
    if (!final_date) return { messageError: 'Final date is required' }
    if (!description) return { messageError: 'Description is required' }
    if (!patient_id) return { messageError: 'Patient is required' }

    const reports = await Prisma.report.create({
        data: {
            title,
            inital_date,
            final_date,
            description,
            patient_id
        }
    })

    return reports


}

export default CreateReportService;