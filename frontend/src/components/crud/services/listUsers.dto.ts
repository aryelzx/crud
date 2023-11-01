interface UsersOutputDto {
  nome: string
  email: string
  fone: string
  data_nascimento: string
  profissao: string
}

interface UsersInputDto {
  nome: string
  email: string
  fone: string
  data_nascimento: string
  profissao: string
}

export type { UsersInputDto, UsersOutputDto }

