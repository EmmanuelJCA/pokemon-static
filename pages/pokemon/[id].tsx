import { useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import confetti from 'canvas-confetti'
import { Layout } from '@/components/layouts'
import { getPokemonInfo, localFavorites } from '@/utils'
import { Pokemon } from '@/interfaces'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {  

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.verifyFavorites( pokemon.id ))

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite( pokemon.id )
    setIsInFavorites(!isInFavorites)

    if( isInFavorites ) return

    confetti({
      zIndex: 999,
      particleCount: 100,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
  }

  return (
    <Layout title={ pokemon.name }>
      <Grid.Container css={{ marginTop: '5px'}} gap={ 2 }>
        <Grid xs={ 12 } sm={ 4 }>
          <Card isHoverable css={{ padding: '38px'}}>
            <Card.Body>
              <Card.Image 
                src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                alt={ pokemon.name }
                width="100%"
                height={ 200 }
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={ 12 } sm={ 8 }>
          <Card>
            <Card.Header>
              <Grid.Container direction='row'>
                <Grid justify='center' xs={ 12 } sm={ 10 }>
                  <Text transform='capitalize' h1>{ pokemon.name }</Text>
                </Grid>
                <Grid justify='center' xs={ 12 } sm={ 2 }>
                  <Button
                    color="gradient"
                    ghost={ !isInFavorites }
                    onPress={ onToggleFavorite }
                  >
                    { isInFavorites ? 'Favorito' : 'Guardar en favoritos' }
                  </Button>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction='row' display='flex'>
                <Image 
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={ 120 }
                  height={ 130 }
                />
                <Image 
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={ 120 }
                  height={ 130 }
                />
                <Image 
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  width={ 120 }
                  height={ 130 }
                />
                <Image 
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  width={ 120 }
                  height={ 130 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const totalPokemons = [...Array(151)].map( ( value, index) => `${ index+1 }`)
  
  return {
    paths: totalPokemons.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string }

  return {
    props: {
      pokemon: await getPokemonInfo(id)
    }
  }
}

export default PokemonPage