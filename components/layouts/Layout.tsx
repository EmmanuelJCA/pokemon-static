import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { Navbar } from "../ui"

interface Props {
  title?: string
}

const origin = (typeof window == 'undefined') ? '' : window.location

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Emmanuel Cañate" />
        <meta name="description" content={`Information about the pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${ title }`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main>
        { children }
      </main>
    </>
  )
}
