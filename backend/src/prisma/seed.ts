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
      crm: 123456,
      role_id: 1
    }
  })
  const user2 = await Prisma.user.create({
    data: {
      name: 'Fernando Rodrigues',
      email: 'fe@gmail.com',
      password: hashSync('123', 8),
      crm: 123456,
      role_id: 1
    }
  })
  const user3 = await Prisma.user.create({
    data: {
      name: 'Julia Rodrigues',
      email: 'julia@gmail.com',
      password: hashSync('123', 8),
      role_id: 2
    }
  })
  const user4 = await Prisma.user.create({
    data: {
      name: 'Maria Silva',
      email: 'maria@gmail.com',
      password: hashSync('123', 8),
      role_id: 2
    }
  })
  const user5 = await Prisma.user.create({
    data: {
      name: 'Manuela Pereira',
      email: 'manuela@gmail.com',
      password: hashSync('123', 8),
      role_id: 3
    }
  })
  const user6 = await Prisma.user.create({
    data: {
      name: 'Diva Back',
      email: 'diva@gmail.com',
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