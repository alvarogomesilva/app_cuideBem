import { Request, Response } from "express";
import PrescriptionPatientService from "../../services/doctors/PrescriptionPatientService";


const PrescriptionPatientControler = async (req: Request, res: Response) => {
    const { title, initial_date, final_date, description, recipe, patient_id } = req.body
    const reports = await PrescriptionPatientService({ title, initial_date, final_date, description, recipe, patient_id })
    return res.json(reports)
}

export default PrescriptionPatientControler;