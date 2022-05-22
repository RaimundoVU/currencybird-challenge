import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { getUsers } from '../services/api';

const Ranking: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
      const fetchUsers = async () => {
        const { data } = await getUsers();
        const fetchedUsers = data.users!.map(( user: any ) => {
          let newUser: IUser;
          newUser = { ...user, invites: user.money / 5000 }
          return newUser;
        });
        setUsers(fetchedUsers)
      }
    fetchUsers()
    }, [])

  return(
    <div className="flex w-full h-screen">
      <div className="flex w-full items-center justify-center">
        <div className="w-11/12 max-w-[700px] justify-center items-center py-10 px-5 bg-white border-2 rounded-md flex flex-col">
          <table>
            <thead className="bg-cyan-600">
              <tr className="">
                <th className="font-normal pl-2 pr-10">Nombre completo </th>
                <th className="font-normal pl-2 pr-5">Invitaciones</th>
                <th className="font-normal pl-2 pr-5">Total recibido $</th>
              </tr>
            </thead>
            <tbody>
          { users.length !== 0 ? users.map(el => 
            <tr key={el.email} className="bg-gray-100">
              <td className="pl-2 pr-5">{el.fullName}</td>
              <td className="pl-2 pr-5">{el.invites}</td>
              <td  className="pl-2 pr-5">{el.money}</td>
            </tr>
            
          ) : <tr>
                <td>No data</td>
              </tr>
            }
            </tbody>
          </table>
          <Link className="mt-8 text-white bg-cyan-600 border-2 rounded-md" to="/">Volver al inicio </Link>
        </div>
      </div>
    </div>
  )

}

export default Ranking;
