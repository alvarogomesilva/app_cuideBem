import { Request, Response } from "express";
import CreateDailysService from "../../services/dailys/CreateDailysService";

const CreateDailysController = async (req: Request, res: Response) => {
        const { title, hour, description, date_initial, final_date, patient_id } = req.body
        const dailys = await CreateDailysService({ title, hour, description, date_initial, final_date, patient_id })
        return res.json(dailys);
} 
 
export default CreateDailysController;
 