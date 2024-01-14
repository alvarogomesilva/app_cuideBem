import { Request, Response } from "express";
import ListPatientByUserService from "../../services/patients/ListPatientByUserService";

const ListPatientByUserController =async (req: Request, res: Response) => {
    const user_id = req.user_id as string

    const patient = await ListPatientByUserService({ user_id })
    return res.json(patient)
}

export default ListPatientByUserController