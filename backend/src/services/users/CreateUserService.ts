import { hashSync } from "bcryptjs"
import Prisma from "../../prisma"

interface User {
    name: string,
    email: string,
    password: string,
    photo?: string,
    phone_number?: string,
    crm?: number,
    role_id: number
}

const CreateUserService = async ({ name, email, password, photo, phone_number, crm, role_id }: User) => {
    if (!name) return { messageError: 'Name is required!' }
    if (!email) return { messageError: 'Email is required!' }
    if (!password) return { messageError: 'Password is required!' }
    if (!role_id) return { messageError: 'User invalid!' }

    const userAlready = await Prisma.user.findFirst({
        where: { email: email },
    })

    if (userAlready) return { messageError: "This email already exists" }

    const passwordHash = hashSync(password, 8);

    const user = await Prisma.user.create({
        data: { name, email, password: passwordHash, photo, phone_number, crm, role_id: +role_id }
    })

    return user

}

export default CreateUserService;