import { Request, Response } from "express";
import ListMyRecordPatientService from "../../services/patients/ListMyRecordPatientService";


const ListMyRecordPatientController = async (req: Request, res: Response) => {
    const doctor_id = req.params.doctor
    const patient_id = req.params.id

    const record = await ListMyRecordPatientService({patient_id, doctor_id})
    return res.json(record)
}

export default ListMyRecordPatientController