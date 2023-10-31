interface UsersOutputDto {
  nome: string
  email: string
  fone: number
  data_nascimento: string
  profissao: string
}

interface UsersInputtDto {
  nome: string
  email: string
  fone: number
  data_nascimento: string
  profissao: string
}

export type { UsersInputtDto, UsersOutputDto }

