import { FC } from 'react'
import { Pokemon } from '../../interfaces/pokemon-list'
import { Card, Grid, Row, Text } from '@nextui-org/react'

interface Props {
  pokemon: Pokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  return (
    <Grid xs={6} sm={4} md={3} xl={2}>
      <Card isHoverable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={ pokemon.img }
            width="100%"
            alt={`${ pokemon.name } Imagen`}
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row justify="space-between">
            <Text transform="capitalize">{ pokemon.name }</Text>
            <Text>#{ pokemon.id }</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
  
}