import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shared/@components/ui/table"

function Crud() {
  const mockUser = [
    "Email",
    "Username",
    "Name",
    "Actions"
  ]
  const mockUserData = [
    "aryel@gmail.com",
    "aryelzx",
    "aryel ramos",
  ]
  return (
    <div className="bg-gray-400 w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6 rounded-lg flex flex-col items-center">
        <div className="flex justify-center text-2xl font-semibold p-2">
          SIMPLE CRUD
        </div>
        <div className="flex justify-center border-2 border-gray-300 rounded-lg w-11/12 h-5/6">
          <Table>
            <TableCaption>Users List 😁</TableCaption>
            <TableHeader>
              <TableRow>
                {mockUser.map((data) => (
                  <TableHead className="text-black text-xl" align="center">{data}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {/* condicionar caso tenha os dados. */}
                {mockUserData.map((dataUser) => (
                  <TableCell className="font-medium">{dataUser}</TableCell>
                ))}
                <TableCell>
                  ACTIONS
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export { Crud }

