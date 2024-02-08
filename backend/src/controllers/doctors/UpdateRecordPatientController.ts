import { Request, Response } from "express"
import UpdateRecordPatientService from "../../services/doctors/UpdateRecordPatientService"


const UpdateRecordPatientController = async (req: Request, res: Response) => {

    const id_record = req.params.id
    const doctor_id = req.user_id
    const { title, initial_date, patient_id, final_date, description } = req.body

    const prescription = await UpdateRecordPatientService({ id_record, title, initial_date, final_date, description, patient_id, doctor_id })

    return res.json(prescription)
}

export default UpdateRecordPatientController