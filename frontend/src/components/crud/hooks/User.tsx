import { createUserService } from "../services/createUser.service";
import { useDeleteUserService } from "../services/deleteUser.service";
import { useEditUserService } from "../services/editUser.service";
import { UsersInputDto, UsersOutputDto } from "../services/listUsers.dto";
import { listUsersService } from "../services/listUsers.service";
import { usersStore } from '../store/UserStore';

function UserHook() {
  const [users, addUsers] = usersStore((state) => [state.users, state.addingUsers])
  console.log(users, 'users Store')

  const getUsers = async () => {
    try {
      const res = await listUsersService.execute()
      addUsers(res)
      // adicionar rest para nao dar loop no useEffect
    }
    catch (error) {
      console.log(error)
    }
  }

  const createUser = async (data: UsersInputDto) => {
    try {
      await createUserService.execute(data)
    }
    catch (res) {
      console.log(res)
    }
  }

  const editUser = async (params: UsersOutputDto) => {
    try {
      await useEditUserService.execute(params)
      getUsers()
    }
    catch (err: any) {
      console.log(err)
    }
  }

  const deleteUser = async (params: UsersOutputDto) => {
    try {
      const id = params.id
      await useDeleteUserService.execute({ id })
      getUsers();
    }
    catch (err: any) {
      console.log(err)
    }
  }

  return {
    getUsers,
    createUser,
    deleteUser,
    editUser
  }
}

export { UserHook };

