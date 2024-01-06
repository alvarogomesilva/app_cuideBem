import { compareSync } from "bcryptjs"
import Prisma from "../../prisma"
import { sign } from "jsonwebtoken";

interface User {
    email: string,
    password: string,
    crm?: number
}

const AuthUserService = async ({ email, password, crm }: User) => {
    if (!email || !password) return { messageError: 'Email/password is required!' }

    const user = await Prisma.user.findFirst({
        where: { email }
    })

    if (!user) return { messageError: 'User incorrect!' }

    const passwordMatch = compareSync(password, user.password) 
    if (!passwordMatch) return { messageError: 'Email/password incorrect!' }
   
    const token = sign({ name: user.name, email: user.email }, process.env.JWT_SECRET, {
        subject: user.id,
        expiresIn: '30d'
    })

    return{ id: user.id, name: user.name, token: token, photo: user.photo, role_id: user.role_id}
}

export default AuthUserService;