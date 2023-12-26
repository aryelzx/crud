import { AxiosInstance } from "axios";
import { http } from "../../../api/http";
import { UsersInputDto } from "./user.dto";

class EditUserService {
  constructor(private readonly api: AxiosInstance) { }

  async execute(body: UsersInputDto) {
    const result = await this.api.put(`/edit-user`, body);

    return result.data
  }
}

const useEditUserService = new EditUserService(http)

export { EditUserService, useEditUserService };

