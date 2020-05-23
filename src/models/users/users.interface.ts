
interface IUser {
  id: number,
  email: string,
  username: string,
  phone: number
}

interface IUserRegister {
  email: string,
  username: string,
  password: string,
  phone: number
}

export { IUser, IUserRegister }