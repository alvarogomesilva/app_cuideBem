import { Request, Response } from "express"
import ListUserService from "../../services/users/ListUserService"

const ListUserController = async (req: Request, res: Response) => {
    const role_id = +req.params.id
    const users = await ListUserService({role_id})
    return res.json(users)
}

export default ListUserController