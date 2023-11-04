interface UsersOutputDto {
  id: number
  nome: string
  email: string
  fone: string
  data_nascimento: string
  profissao: string
}

type IDeleteUser = {
  id: number
}
interface UsersInputDto {
  nome: string
  email: string
  fone: string
  data_nascimento: string
  profissao: string
}

export type { IDeleteUser, UsersInputDto, UsersOutputDto }

