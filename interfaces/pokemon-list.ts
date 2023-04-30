export interface PokemonListResponse {
  count:     number
  next?:     string
  previous?: string
  results:   PokemonResponse[]
}

export interface PokemonResponse {
  name: string
  url:  string
  id:   number
  img:  string
}