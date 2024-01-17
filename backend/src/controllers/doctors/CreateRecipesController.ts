import { Request, Response } from "express";
import CreateRecipesService from "../../services/doctors/CreateRecipesService";

const CreateRecipesController = async (req: Request, res: Response) => {

    const { recipe, patient_id } = req.body

    const recipes = await CreateRecipesService({ recipe, patient_id })
    return res.json(recipes)
}

export default CreateRecipesController;

