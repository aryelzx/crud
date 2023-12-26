import { AxiosInstance } from "axios";
import { http } from "../../../api/http";
import { UsersInputDto, UsersOutputDto } from './user.dto';

class CreateUserService {
  constructor(private readonly api: AxiosInstance) { }

  async execute({ data_nascimento, email, fone, nome, profissao }: UsersInputDto): Promise<UsersOutputDto> {
    const result = await this.api.post<UsersOutputDto>('/create-user', { data_nascimento, email, fone, nome, profissao })

    return result.data
  }
}

const createUserService = new CreateUserService(http)

export { CreateUserService, createUserService };

