import { Request, Response } from "express"
import ListUserService from "../../services/users/ListUserService"

const ListUserController = async (req: Request, res: Response) => {
    
    const users = await ListUserService()
    return res.json(users)
}

export default ListUserController