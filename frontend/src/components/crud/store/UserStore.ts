import { create } from "zustand";
import { UsersOutputDto } from "../services/listUsers.dto";

//zustand state manager

type UsersStore = {
  users: UsersOutputDto[];
  addingUsers: (users: UsersOutputDto[]) => void;
  removeUsers: (id: number) => void;
  editUser: (users: UsersOutputDto) => void;
}

const usersStore = create<UsersStore>((set) => {
  return {
    users: [],
    addingUsers: (user) => set(({ users: [...user] })),
    removeUsers: (id) => set((state) => ({ users: state.users.filter((item) => item.id !== id) })),
    editUser: (user) => set((state) => ({ users: state.users.map((item) => item.id === user.id ? user : item) }))
  }
})

export { usersStore };

