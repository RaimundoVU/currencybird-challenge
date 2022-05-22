import axios, { AxiosResponse } from "axios";

const baseUrl = 'http://localhost:5555'

export const getUser = async (searchValue: string): Promise<AxiosResponse<UserResponse>> => {
  try {
    const user: AxiosResponse<UserResponse> = await axios.get(
      baseUrl + "/user/" + searchValue
    )
    return user;
  } catch (error) {
    throw new Error();
  }
}

export const getUsers = async (): Promise<AxiosResponse<UserResponse>> => {
  try {
    const user: AxiosResponse<UserResponse> = await axios.get(
      baseUrl + "/getUsers"
    )
    return user;
  } catch (error) {
    throw new Error();
  }
}

export const createUser = async (values: IUser) => {
  try {
    const user = await axios.post(
      baseUrl + '/addUser',
      values
    )
    return user;
  } catch (error) {
      throw new Error();
  }
}

