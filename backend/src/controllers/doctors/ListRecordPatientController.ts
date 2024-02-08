import { Request, Response } from "express";
import ListRecordPatientService from "../../services/doctors/ListRecordPatientService";


const ListRecordPatientController = async (req: Request, res: Response) => {
    const patient_id = req.params.id
    const doctor_id = req.user_id

    const prescription = await ListRecordPatientService({patient_id, doctor_id})
    return res.json(prescription)
}

export default ListRecordPatientController