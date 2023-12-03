import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineUserAdd } from "react-icons/ai"
import { z } from "zod"
import { Button } from "../../../shared/@components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../../../shared/@components/ui/dialog"
import { crudSchema } from "../schemas/crud.schema"
import { createUserService } from "../services/createUser.service"


function CreateUserDialog() {
  const [formRegisterUser, setFormRegisterUser] = useState({
    name: '',
    email: '',
    fone: '',
    birthday: '',
    profession: ''
  })

  const handleChangeRegisterUser = (e) => {
    setFormRegisterUser(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

    console.log(formRegisterUser)
  }

  const createUser = async () => {
    const body = {
      nome: formRegisterUser.name,
      email: formRegisterUser.email,
      fone: formRegisterUser.fone,
      data_nascimento: formRegisterUser.birthday,
      profissao: formRegisterUser.profession
    }
    try {
      await createUserService.execute(body)
    }
    catch (res) {
      console.log(res)
    }
  }

  type CrudSchema = z.infer<typeof crudSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CrudSchema>({
    resolver: zodResolver(crudSchema),
  })

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
            <form className="w-3/6 flex flex-col gap-2" onSubmit={createUser()}>
              <div className="flex-col flex">
                <label htmlFor="email">Name:</label>
                <input
                  type="text"
                  className="p-2 h-[40px] border-[1px] border-black rounded-md"
                  name="name"
                  onChange={handleChangeRegisterUser}
                />
              </div>
              <div className="flex-col flex">
                <label htmlFor="Name">Email:</label>
                <input
                  type="email"
                  className="p-2 h-[40px] border-[1px] border-black rounded-md"
                  name="email"
                  onChange={handleChangeRegisterUser} />
              </div>
              <div className="flex-col flex">
                <label htmlFor="Username">Fone:</label>
                <input
                  type="text"
                  className="p-2 h-[40px] border-[1px] border-black rounded-md"
                  name="fone"
                  onChange={handleChangeRegisterUser} />
              </div>
              <div className="flex-col flex">
                <label htmlFor="Password">Your Birthday:</label>
                <input
                  type="text"
                  className="p-2 h-[40px] border-[1px] border-black rounded-md"
                  name="birthday"
                  onChange={handleChangeRegisterUser} />
              </div>
              <div className="flex-col flex">
                <label htmlFor="Password">Profession</label>
                <input
                  type="text"
                  className="p-2 h-[40px] border-[1px] border-black rounded-md"
                  name="profession"
                  onChange={handleChangeRegisterUser} />
              </div>
              <Button
                className="w-full bg-green-400 hover:bg-green-500 delay-75"
                disabled={name === '' || email === '' || fone === '' || birthday === '' || profession === ''}
                onClick={() => createUser()}
              >
                Send
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export { CreateUserDialog }

