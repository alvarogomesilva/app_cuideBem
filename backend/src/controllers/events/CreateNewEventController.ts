import { Request, Response } from "express";
import CreateNewEventService from "../../services/events/CreateNewEventService";

const CreateNewEventController = async (req: Request, res: Response) => {

        const { color, hour, description, date, patient_id } = req.body
        const events = await CreateNewEventService({ color, hour, description, date, patient_id })
        return res.json(events)
}

export default CreateNewEventController;