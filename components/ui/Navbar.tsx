import { FC } from "react";
import { Navbar as NavbarN, Text, Image } from "@nextui-org/react";

export const Navbar: FC = () => {
  return (
    <NavbarN variant={"floating"}>
      <NavbarN.Brand>
        <Image 
          src="pokeball.svg"
          alt="Icono de la app"
          width={70}
          height={70}
          />
        <Text color='white' hideIn={"xs"} h2>P</Text>
        <Text color='white' hideIn={"xs"} h3>okemon</Text>
      </NavbarN.Brand>
      <Text color='white'>Favoritos</Text>
    </NavbarN>
  )
}
