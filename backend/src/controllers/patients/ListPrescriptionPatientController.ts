import { Request, Response } from "express";
import ListMyPrescriptionPatientService from "../../services/patients/ListMyPrescriptionPatientService";

const ListMyPrescriptionPatientController = async (req: Request, res: Response) => {
    const doctor_id = req.params.doctor
    const patient_id = req.params.id

    const prescription = await ListMyPrescriptionPatientService({patient_id, doctor_id})
    return res.json(prescription)
}

export default ListMyPrescriptionPatientController