import { Request, Response } from "express";
import ListPrescriptionPatientService from "../../services/doctors/ListPrescriptionPatientService";

const ListPrescriptionPatientController = async (req: Request, res: Response) => {
    const patient_id = req.params.id
    const doctor_id = req.user_id

    const prescription = await ListPrescriptionPatientService({patient_id, doctor_id})
    return res.json(prescription)
}

export default ListPrescriptionPatientController