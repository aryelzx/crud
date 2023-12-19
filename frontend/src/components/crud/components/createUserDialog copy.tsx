import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AiOutlineUserAdd } from "react-icons/ai"
import { FaUserPlus } from "react-icons/fa6"
import { z } from "zod"
import { Button } from "../../../shared/@components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../../../shared/@components/ui/dialog"
import { UserHook } from "../hooks/User"
import { inputs } from "../mocks/inputs"
import { crudSchema } from "../schemas/crud.schema"
import { CustomForm } from "./customForm"

function CreateUserDialog() {
  type CrudSchema = z.infer<typeof crudSchema>;

  const form = useForm<CrudSchema>({
    resolver: zodResolver(crudSchema),
  })

  const { createUser } = UserHook()

  return (
    <>
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
            <CustomForm form={form} inputs={inputs} label="Create User" onsubmit={() => createUser(form.getValues())} icon={<FaUserPlus />} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export { CreateUserDialog }

