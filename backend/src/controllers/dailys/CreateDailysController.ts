import { Request, Response } from "express";
import CreateDailysService from "../../services/dailys/CreateDailysService";

const CreateDailysController = async (req: Request, res: Response) => {
    try {
        const { title, hour, description, done, patient_id } = req.body
        const dailys = await CreateDailysService({ title, hour, description, done, patient_id })
        return res.json(dailys);
    }
    catch (error) {
        res.status(400).json({ message: "error when creating daily" })
    }
}

export default CreateDailysController;
