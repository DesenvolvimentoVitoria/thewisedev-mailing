import { RegisterUserResponse } from './register-user-response'
import { UserData } from '../../entities/user-data'

export interface RegisterUser {
  registerUserOnMailingList: (user: UserData) => Promise<RegisterUserResponse>
}
