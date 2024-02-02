import Prisma from "../../prisma";

interface Dailys {
    title: string,
    hour: Date,
    description: string,
    done: boolean,
    patient_id: string
}

const CreateDailysService = async ({ title, hour, description, done, patient_id }: Dailys) => {
    if (!title) return { messageError: "Title is required!" }
    if (!hour) return { messageError: "Hour is required!" }
    if (!description) return { messageError: "Description is required!" }
    if (!done) return { messageError: "Done is required!" }
    if (!patient_id) return { messageError: "Patiente_id is required!" }

    const dailys = await Prisma.daily.create({
        data: { title, hour, description, done, patient_id }
    })
    return dailys
}

export default CreateDailysService;