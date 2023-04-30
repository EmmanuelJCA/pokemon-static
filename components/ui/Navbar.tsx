import { FC } from "react";
import NextLink from 'next/link';
import { Navbar as NavbarUI, Text, Image, Link } from "@nextui-org/react";

export const Navbar: FC = () => {
  return (
    <NavbarUI variant={"floating"}>
      <NextLink href="/" passHref legacyBehavior>
        <Link>
          <NavbarUI.Brand>
            <Image 
              src="/pokeball.svg"
              alt="App icon"
              width={70}
              height={70}
              />
            <Text color='white' hideIn={"xs"} h2>P</Text>
            <Text color='white' hideIn={"xs"} h3>okemon</Text>
          </NavbarUI.Brand>
        </Link>
      </NextLink>
      <NextLink href="/favorites" passHref legacyBehavior>
        <Link>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </NavbarUI>
  )
}
