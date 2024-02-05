import Prisma from "../../prisma"


const ListUserService = async () => {
    const role_id = 3

    const users = await Prisma.user.findMany({
        where: { role_id }
    })

    return users

}

export default ListUserService