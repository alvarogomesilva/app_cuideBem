import { hashSync } from 'bcryptjs';
import Prisma from '.';

async function main() {
  const role1 = await Prisma.role.create({
    data: { name: 'doctor' }
  })
  const role2 = await Prisma.role.create({
    data: { name: 'guardian' }
  })
  const role3 = await Prisma.role.create({
    data: { name: 'caregiver' }
  })

  const user1 = await Prisma.user.create({
    data: {
      name: 'Ronaldo da Silva',
      email: 'ronaldo@gmail.com',
      password: hashSync('123', 8),
      role_id: 1
    }
  })
  const user2 = await Prisma.user.create({
    data: {
      name: 'Julia Rodrigues',
      email: 'julia@gmail.com',
      crm: 123456,
      password: hashSync('123', 8),
      role_id: 2
    }
  })
  const user3 = await Prisma.user.create({
    data: {
      name: 'Manuela Pereira',
      email: 'manuela@gmail.com',
      password: hashSync('123', 8),
      role_id: 3
    }
  })
}

main()
  .then(async () => {
    await Prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await Prisma.$disconnect()
  })