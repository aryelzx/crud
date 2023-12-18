import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AiOutlineUserAdd } from "react-icons/ai"
import { z } from "zod"
import { Button } from "../../../shared/@components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../../../shared/@components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../shared/@components/ui/form"
import { Input } from "../../../shared/@components/ui/input"
import { inputs } from "../mocks/inputs"
import { crudSchema } from "../schemas/crud.schema"
import { createUserService } from "../services/createUser.service"
import { UsersInputDto } from "../services/listUsers.dto"


function CreateUserDialog() {
  type CrudSchema = z.infer<typeof crudSchema>;

  const form = useForm<CrudSchema>({
    resolver: zodResolver(crudSchema),
  })

  const createUser = async (data: UsersInputDto) => {
    try {
      await createUserService.execute(data)
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
            <Form {...form}>
              <form className="w-3/6 flex flex-col gap-2" onSubmit={form.handleSubmit((data) => createUser(data))}>
                <div className="flex-col flex">
                  {inputs.map((data) => (
                    <>
                      <FormField
                        control={form.control}
                        name={data.name}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{data.label}</FormLabel>
                            <FormControl>
                              <Input
                                type={data.type}
                                value={field.value}
                                onChange={(event) => { return field.onChange(event.target.value) }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  ))}
                </div>
                <Button
                  className="w-full bg-green-400 hover:bg-green-500 delay-75"
                  type="submit"
                >
                  Send
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export { CreateUserDialog }

