import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shared/@components/ui/table";

import { AiOutlineEdit, AiOutlineUserDelete } from "react-icons/ai";
import { CreateUserDialog } from "../components/createUserDialog";
import { mockUser } from '../mocks/tableRow';
import { useDeleteUserService } from "../services/deleteUser.service";
import { UsersOutputDto } from "../services/listUsers.dto";
import { listUsersService } from "../services/listUsers.service";

function Crud() {
  const [users, setUsers] = useState<UsersOutputDto[]>([]);
  const getUsers = async () => {
    try {
      const res = await listUsersService.execute()
      setUsers(res)
      // adicionar rest para nao dar loop no useEffect
    }
    catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async (params: UsersOutputDto) => {
    try {
      const id = params.id
      await useDeleteUserService.execute({ id })
      getUsers();
    }
    catch (err: any) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsers();
    //TODO consertar quando a requisição será feita!
  }, [])

  return (
    <div className="bg-gray-400 w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6 rounded-lg flex flex-col items-center">
        <p className="text-2xl font-semibold p-2">
          SIMPLE CRUD
        </p>
        <div className="flex justify-end mr-24 w-full p-2">
          <CreateUserDialog />
        </div>
        <div className="flex justify-center  border-gray-300 rounded-lg w-11/12 h-4/6">
          <Table>
            <TableCaption>Users List</TableCaption>
            <TableHeader>
              <TableRow>
                {mockUser.map((data) => (
                  <TableHead className="text-black text-xl text-center">{data}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* condicionar caso tenha os dados. */}
              {
                users.map((data) => (
                  <>
                    <TableRow className="text-center">
                      <TableCell>
                        {data.nome}
                      </TableCell>
                      <TableCell>
                        {data.email}
                      </TableCell>
                      <TableCell>
                        {data.fone}
                      </TableCell>
                      <TableCell>
                        {data.data_nascimento}
                      </TableCell>
                      <TableCell>
                        {data.profissao}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3 text-2xl justify-center">
                          <AiOutlineUserDelete
                            onClick={() => deleteUser(data)}
                            className="w-10 h-8 bg-red-400 rounded-lg p-1 cursor-pointer hover:bg-red-500 " />
                          <AiOutlineEdit className="w-10 h-8 bg-yellow-400 rounded-lg p-1 cursor-pointer hover:bg-yellow-500 " />
                        </div>
                      </TableCell>
                    </TableRow >
                  </>
                ))
              }
            </TableBody>
          </Table>
        </div>
      </div>
    </div >
  )
}

export { Crud };

