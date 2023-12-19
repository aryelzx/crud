import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AiOutlineEdit } from "react-icons/ai"
import { FaUserPen } from "react-icons/fa6"
import { z } from "zod"
import { Dialog, DialogContent, DialogTrigger } from "../../../shared/@components/ui/dialog"
import { UserHook } from "../hooks/User"
import { inputs } from "../mocks/inputs"
import { crudSchema } from "../schemas/crud.schema"
import { usersStore } from "../store/UserStore"
import { CustomForm } from "./customForm"


function EditUserDialog() {
  const { editUser } = UserHook()
  const editUserStore = usersStore((state) => state.editUser)

  type CrudSchema = z.infer<typeof crudSchema>;

  const form = useForm<CrudSchema>({
    resolver: zodResolver(crudSchema),
  })

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <AiOutlineEdit className="w-10 h-8 bg-yellow-400 rounded-lg p-1 cursor-pointer hover:bg-yellow-500 " />
        </DialogTrigger>
        <DialogContent>
          <div className="flex flex-col w-full items-center">
            <CustomForm form={form} inputs={inputs} label="Edit User" onsubmit={() => editUser()} icon={<FaUserPen />} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export { EditUserDialog }

