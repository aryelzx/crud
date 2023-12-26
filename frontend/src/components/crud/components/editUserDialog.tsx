import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEdit } from "react-icons/ai"
import { FaUserPen } from "react-icons/fa6"
import { z } from "zod"
import { Dialog, DialogContent, DialogTrigger } from "../../../shared/@components/ui/dialog"
import { UserHook } from "../hooks/User"
import { inputs } from "../mocks/inputs"
import { crudSchema } from "../schemas/crud.schema"
import { UsersInputDto } from "../services/user.dto"
import { usersStore } from "../store/UserStore"
import { CustomForm } from "./customForm"


function EditUserDialog() {
  const { editUser } = UserHook()
  const [users] = usersStore((state: any) => [state.users])

  type CrudSchema = z.infer<typeof crudSchema>;

  const editUserForm = useForm<CrudSchema>({
    resolver: zodResolver(crudSchema),
    defaultValues: {
      nome: "",
      email: "",
      fone: "",
      data_nascimento: "",
      profissao: ""

    },
  })

  useEffect(() => {
    const setFormValues = (userData: UsersInputDto[]) => {
      userData.forEach((user) => {
        editUserForm.setValue("nome", user?.nome)
        editUserForm.setValue("email", user?.email)
        editUserForm.setValue("fone", user?.fone)
        editUserForm.setValue("data_nascimento", user?.data_nascimento)
        editUserForm.setValue("profissao", user?.profissao)
      })
    }

    setFormValues(users)
  }, [users, editUserForm])

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <AiOutlineEdit className="w-10 h-8 bg-yellow-400 rounded-lg p-1 cursor-pointer hover:bg-yellow-500 " />
        </DialogTrigger>
        <DialogContent>
          <div className="flex flex-col w-full items-center">
            <CustomForm form={editUserForm} inputs={inputs} label="Edit User" onsubmit={editUserForm.handleSubmit((data) => editUser(data))} icon={<FaUserPen />} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export { EditUserDialog }

