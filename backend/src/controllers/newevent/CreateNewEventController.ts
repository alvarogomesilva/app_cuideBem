import { Request, Response } from "express";
import CreateNewEventService from "../../services/events/CreateNewEventService";

const CreateNewEventController = async (req: Request, res: Response) => {
    try {
        const patient_id = req.params.id
        const { description, date } = req.body

        if (!description || !date) {
            return res.status(400).json({ messagem: "Fields not filled in!" })
        }

        const events = await CreateNewEventService({ description, date, patient_id })
        return res.json(events)
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default CreateNewEventController;