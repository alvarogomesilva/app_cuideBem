import { Request, Response } from "express";
import CreateUserService from "../../services/users/CreateUserService";

const CreateUserController = async (req: Request, res: Response) => {

    const { name, email, password, role_id } = req.body
    
    const user = await CreateUserService({ name, email, password, role_id })
    return res.json(user) 
}

export default CreateUserController;