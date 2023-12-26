import { AxiosInstance } from "axios";
import { http } from "../../../api/http";
import { UsersOutputDto } from "./user.dto";

class ListUsersService {
  constructor(private readonly api: AxiosInstance) { }

  async execute(): Promise<UsersOutputDto[]> {
    const result = await this.api.get<UsersOutputDto[]>('/users')

    return result.data
  }
}

const listUsersService = new ListUsersService(http)

export { ListUsersService, listUsersService };

