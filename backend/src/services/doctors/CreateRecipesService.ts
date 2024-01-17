import Prisma from "../../prisma";

interface Recipe {
    recipe: string,
    patient_id: string
}

const CreateRecipesService = async ({ recipe, patient_id }: Recipe) => {
    if (!recipe) return { messageError: 'Recipe is required' }
    if (!patient_id) return { messageError: 'Patient inválid' }

    const patient = await Prisma.patient.update({
        data: { recipe },
        where: { id: patient_id }
    })

    
    return patient
}

export default CreateRecipesService;