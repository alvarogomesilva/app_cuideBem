import { Request, Response } from "express"
import UpdateRecordPatientService from "../../services/doctors/UpdateRecordPatientService"


const UpdateRecordPatientController = async (req: Request, res: Response) => {

    const id_record = req.params.id
    const doctor_id = req.user_id
    const { title, patient_id, description } = req.body

    const prescription = await UpdateRecordPatientService({ id_record, title, description, patient_id, doctor_id })

    return res.json(prescription)
}

export default UpdateRecordPatientController