import { useState } from "react"
import { AiOutlineUserAdd } from "react-icons/ai"
import { Button } from "../../../shared/@components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../../../shared/@components/ui/dialog"
import { createUserService } from "../services/createUser.service"


function CreateUserDialog() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [fone, setFone] = useState('')
  const [birthday, setBirthday] = useState('')
  const [profession, setProfession] = useState('')

  const createUser = async () => {
    const body = {
      nome: name,
      email: email,
      fone: fone,
      data_nascimento: birthday,
      profissao: profession
    }
    try {
      await createUserService.execute(body)
    }
    catch (res) {
      console.log(res)
    }
  }
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
            <form className="w-3/6 flex flex-col gap-2">
              <div className="flex-col flex">
                <label htmlFor="email">Name:</label>
                <input
                  type="text"
                  className="p-2 h-[40px] border-[1px] border-black rounded-md"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex-col flex">
                <label htmlFor="Name">Email:</label>
                <input type="email" className="p-2 h-[40px] border-[1px] border-black rounded-md" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex-col flex">
                <label htmlFor="Username">Fone:</label>
                <input type="text" className="p-2 h-[40px] border-[1px] border-black rounded-md" onChange={(e) => setFone(e.target.value)} />
              </div>
              <div className="flex-col flex">
                <label htmlFor="Password">Your Birthday:</label>
                <input type="text" className="p-2 h-[40px] border-[1px] border-black rounded-md" onChange={(e) => setBirthday(e.target.value)} />
              </div>
              <div className="flex-col flex">
                <label htmlFor="Password">Profession</label>
                <input type="text" className="p-2 h-[40px] border-[1px] border-black rounded-md" onChange={(e) => setProfession(e.target.value)} />
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

