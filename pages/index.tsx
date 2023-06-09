import { NextPage, GetStaticProps } from "next"
import { Grid } from "@nextui-org/react"
import { pokeApi } from "@/api"
import { Layout } from "@/components/layouts"
import { PokemonResponse, PokemonListResponse } from "@/interfaces"
import { PokemonCard } from "@/components/pokemon"

interface Props {
  pokemons: PokemonResponse[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout>
      <Grid.Container gap={ 2 } justify="flex-start">
        {pokemons.map(
          pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          )
        )}
      </Grid.Container>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: PokemonResponse[] = data.results.map(
    (pokemon, i) => ({
      ...pokemon,
      id: i+1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
    })
  )

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage