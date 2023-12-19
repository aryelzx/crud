import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shared/@components/ui/table";

import { AiOutlineUserDelete } from "react-icons/ai";
import { CreateUserDialog } from "../components/createUserDialog copy";
import { EditUserDialog } from "../components/editUserDialog";
import { UserHook } from "../hooks/User";
import { mockUser } from '../mocks/tableRow';
import { usersStore } from "../store/UserStore";

function Crud() {
  const { deleteUser, getUsers, editUser } = UserHook();
  const users = usersStore((state) => state.users)

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
                users.map((item) => (
                  <>
                    <TableRow className="text-center">
                      <TableCell>
                        {item.nome}
                      </TableCell>
                      <TableCell>
                        {item.email}
                      </TableCell>
                      <TableCell>
                        {item.fone}
                      </TableCell>
                      <TableCell>
                        {item.data_nascimento}
                      </TableCell>
                      <TableCell>
                        {item.profissao}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3 text-2xl justify-center">
                          <AiOutlineUserDelete
                            onClick={() => deleteUser(item)}
                            className="w-10 h-8 bg-red-400 rounded-lg p-1 cursor-pointer hover:bg-red-500" />
                          <EditUserDialog />

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

