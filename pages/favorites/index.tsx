import { FC, useEffect, useState } from "react"
import { Layout } from "@/components/layouts"
import { EmptyFavorites } from "@/components/ui"
import { FavoritePokemons, PokemonCard } from "@/components/pokemon";
import { localFavorites } from '@/utils';


const FavoritesPage: FC = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setfavoritePokemons( localFavorites.pokemons() )
  }, [])
  
  return (
    <Layout title="Favoritos">
      {
        favoritePokemons.length > 0
          ? ( <FavoritePokemons pokemons={ favoritePokemons } />)
          : ( <EmptyFavorites /> )
          
           
      }
    </Layout>
  )
}

export default FavoritesPage