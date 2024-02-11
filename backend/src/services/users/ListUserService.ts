import Prisma from "../../prisma"


const ListUserService = async ({role_id}: {role_id: number}) => {
    

    const users = await Prisma.user.findMany({
        where: { role_id }
    })

    return users

}

export default ListUserService