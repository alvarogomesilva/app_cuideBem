import { Request, Response } from "express";
import CreateReportService from "../../services/doctors/CreateReportService";


const CreateReportController = async (req: Request, res: Response) => {
    const { title, inital_date, final_date, description, patient_id } = req.body
    const reports = await CreateReportService({ title, inital_date, final_date, description, patient_id })
    return res.json(reports)
}

export default CreateReportController;