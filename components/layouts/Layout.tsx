import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { Navbar } from "../ui"

interface Props {
  title?: string
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Emmanuel Cañate" />
        <meta name="description" content="Information about the pokemon ******" />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main>
        { children }
      </main>
    </>
  )
}
