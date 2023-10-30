import { Button } from "../../../shared/@components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shared/@components/ui/table"

import { AiOutlineEdit, AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai"

function Crud() {
  const mockUser = [
    "Username",
    "Email",
    "Name",
    "Actions"
  ]
  const mockUserData = [
    {
      email: "aryel@gmail.com",
      username: "aryelzx",
      name: "aryel ramos"
    },
    {
      email: "duda@gmail.com",
      username: "dudans",
      name: "duda ramos"
    },
    {
      email: "johnDoe@gmail.com",
      username: "JohnDoe",
      name: "John ramos"
    },
    {
      email: "teste@gmail.com",
      username: "teste",
      name: "teste ramos"
    },
  ]
  return (
    <div className="bg-gray-400 w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6 rounded-lg flex flex-col items-center">
        <p className="text-2xl font-semibold p-2">
          SIMPLE CRUD
        </p>
        <div className="flex justify-end mr-24 w-full p-2">
          <Button variant={"outline"} className="w-32 rounded-lg p-1 cursor-pointer delay-75 hover:border-green-500">
            <p className="flex items-center gap-1 text-lg font-normal">
              New User
              <AiOutlineUserAdd />
            </p>
          </Button>
        </div>
        <div className="flex justify-center border-2 border-gray-300 rounded-lg w-11/12 h-4/6">
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
                mockUserData.map((data) => (
                  <>
                    <TableRow className="text-center">
                      <TableCell>
                        {data.username}
                      </TableCell>
                      <TableCell>
                        {data.email}
                      </TableCell>
                      <TableCell>
                        {data.name}
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

export { Crud }

