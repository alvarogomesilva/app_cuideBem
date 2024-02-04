import { Request, Response } from "express";
import PrescriptionPatientService from "../../services/doctors/PrescriptionPatientService";


const PrescriptionPatientControler = async (req: Request, res: Response) => {
    const doctor_id = req.user_id
    const { recipe, patient_id } = req.body
    const reports = await PrescriptionPatientService({ recipe, patient_id, doctor_id })
    return res.json(reports)
}

export default PrescriptionPatientControler;