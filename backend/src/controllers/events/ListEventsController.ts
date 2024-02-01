import { Request, Response } from "express";
import ListEventsService from "../../services/events/ListEventsService";

const ListEventsController = async (req: Request, res: Response) => {

    const patient_id = req.params.patient
    const date = req.params.date
    const events = await ListEventsService({ patient_id, date })
    return res.json(events)
}

export default ListEventsController