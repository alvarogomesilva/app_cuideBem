import { Request, Response } from "express";
import DoneDailyService from "../../services/dailys/DoneDailyService";

const DoneDailyController = async (req: Request, res: Response) => {
    const id = req.params.id
    const daily = await DoneDailyService({id})
    return res.json(daily)
}

export default DoneDailyController