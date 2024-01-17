import { Request, Response } from "express";
import ListPatientService from "../../services/patients/ListPatientService";

const ListPatientController =async (req: Request, res: Response) => {
    const user_id = req.user_id as string
    const search  = req.query.search as string
    const patient = await ListPatientService({ user_id, search })
    return res.json(patient)
}

export default ListPatientController