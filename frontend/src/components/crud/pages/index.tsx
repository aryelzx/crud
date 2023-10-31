import { useEffect, useState } from "react";
import { Button } from "../../../shared/@components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../../../shared/@components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shared/@components/ui/table";

import { AiOutlineEdit, AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import { UsersOutputDto } from "../services/listUsers.dto";
import { listUsersService } from "../services/listUsers.service";

function Crud() {
  const [users, setUsers] = useState<UsersOutputDto[]>([]);

  const getUsers = async () => {
    try {
      const res = await listUsersService.execute()
      setUsers(res)
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsers();
  }, [setUsers])

  const mockUser = [
    "Name",
    "Email",
    "Fone",
    "Date of birth",
    "Profession",
    "Actions"
  ]

  return (
    <div className="bg-gray-400 w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6 rounded-lg flex flex-col items-center">
        <p className="text-2xl font-semibold p-2">
          SIMPLE CRUD
        </p>
        <div className="flex justify-end mr-24 w-full p-2">
          <Dialog>
            <DialogTrigger>
              <Button variant={"outline"} className="w-32 rounded-lg p-1 cursor-pointer delay-75 hover:border-green-500">
                <p className="flex items-center gap-1 text-lg font-normal">
                  New User
                  <AiOutlineUserAdd />
                </p>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <div className="flex flex-col w-full items-center">
                <form className="w-3/6 flex flex-col gap-2">
                  <div className="flex-col flex">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="p-2 h-[40px] border-[1px] border-black rounded-md" />
                  </div>
                  <div className="flex-col flex">
                    <label htmlFor="Name">Name:</label>
                    <input type="text" className="p-2 h-[40px] border-[1px] border-black rounded-md" />
                  </div>
                  <div className="flex-col flex">
                    <label htmlFor="Username">Username:</label>
                    <input type="text" className="p-2 h-[40px] border-[1px] border-black rounded-md" />
                  </div>
                  <div className="flex-col flex">
                    <label htmlFor="Password">Password:</label>
                    <input type="password" className="p-2 h-[40px] border-[1px] border-black rounded-md" />
                  </div>
                  <Button className="w-full bg-green-400 hover:bg-green-500 delay-75">
                    Send
                  </Button>
                </form>
              </div>
            </DialogContent>
          </Dialog>
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
                          <AiOutlineUserDelete className="w-10 h-8 bg-red-400 rounded-lg p-1 cursor-pointer hover:bg-red-500 " />
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
      </div >
    </div >
  )
}

export { Crud };

