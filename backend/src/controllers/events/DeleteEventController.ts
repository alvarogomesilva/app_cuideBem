import { Request, Response } from "express";
import DeleteEventService from "../../services/events/DeleteEventService";

const DeleteEventController = async (req: Request, res: Response) => {
    
    const id = req.params.id
    const event = await DeleteEventService({id})
    return res.json(event)
}

export default DeleteEventController