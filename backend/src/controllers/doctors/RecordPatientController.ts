import { Request, Response } from "express";
import RecordPatientService from "../../services/doctors/RecordPatientService";

const RecordPatientController = async (req: Request, res: Response) => {
    const doctor_id = req.user_id
    const {title, initial_date, final_date, description, patient_id} = req.body

    const record = await RecordPatientService({title, initial_date, final_date, description, patient_id, doctor_id})

    return res.json(record)
}

export default RecordPatientController