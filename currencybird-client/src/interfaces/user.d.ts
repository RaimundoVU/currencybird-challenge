interface IUser {
  _id?: string;
  email: string;
  fullName: string;
  direction: string;
  money?: number;
  gender: string;
  referalString?: string;
  referedBy?: string;
  invites?: number;
}

type UserResponse = {
  status: number;
  user?: IUser;
  users?: IUser[];
}
