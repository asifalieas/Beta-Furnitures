import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'test@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Asif Ali',
    email: 'asif@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Nirmal TR',
    email: 'nirmal@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
