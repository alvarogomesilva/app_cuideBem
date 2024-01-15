import Prisma from "../../prisma";

interface Recipe {

    description: string,
    patient_id: string

}

const CreateRecipesService = async ({ description, patient_id }: Recipe) => {
    if (!description) return { messageError: "Description is required!" }
    if (!patient_id) return { messageError: "Patient ID is required!" }

    const existingPatient = await Prisma.patient.findUnique({
        where: { id: patient_id }
    })

    if (!existingPatient) return ({ messageError: "Patient with the provided ID does not exist!" })

    const recipes = await Prisma.recipe.create({
        data: { description, patient_id: existingPatient.id }
    })

    return recipes
}

export default CreateRecipesService;