import { NextPage, GetStaticProps } from "next"
import { Layout } from "@/components/layouts"
import { pokeApi } from "@/api"


const HomePage: NextPage = () => {
  return (
    <Layout>
      <ul>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
      </ul>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get('/pokemon?limit=151')  

  return {
    props: {
      pokemons: data
    }
  }
  
}

export default HomePage