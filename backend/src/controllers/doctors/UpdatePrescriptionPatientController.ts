import { Request, Response } from "express"
import UpdatePrescriptionPatientService from "../../services/doctors/UpdatePrescriptionPatientService"

const UpdatePrescriptionPatientController = async (req: Request, res: Response) => {

    const id_prescription = req.params.id
    const doctor_id = req.user_id
    const { patient_id, recipe } = req.body

    const prescription = await UpdatePrescriptionPatientService({ patient_id, doctor_id, id_prescription, recipe })

    return res.json(prescription)
}

export default UpdatePrescriptionPatientController