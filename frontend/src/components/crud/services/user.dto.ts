interface UsersOutputDto {
  id: number
  nome: string
  email: string
  fone: string
  data_nascimento: string
  profissao: string
}

type IActionUser = {
  id: number
}
interface UsersInputDto {
  id: number
  nome: string
  email: string
  fone: string
  data_nascimento: string
  profissao: string
}


export type { IActionUser, UsersInputDto, UsersOutputDto }

