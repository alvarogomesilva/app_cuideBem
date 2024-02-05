import { Request, Response } from "express";
import ListDailyService from "../../services/dailys/ListDailyService";

const ListDailyController = async (req: Request, res: Response) => {
    const patient_id = req.params.id
    const date = req.params.date
    const daily = await ListDailyService({ patient_id, date })
    return res.json(daily)
}

export default ListDailyController;