import { AxiosInstance } from "axios";
import { http } from "../../../api/http";
import { IDeleteUser } from "./listUsers.dto";

class DeleteUserService {
  constructor(private readonly api: AxiosInstance) { }
  async execute(id: IDeleteUser) {
    const result = await this.api.delete('/delete-users/:', { params: id })

    return result.data
  }
}

const useDeleteUserService = new DeleteUserService(http)

export { DeleteUserService, useDeleteUserService };

