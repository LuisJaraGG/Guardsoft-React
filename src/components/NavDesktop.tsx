import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
const NavDesktop = () => {

    return (
      <Navbar className="fixed hidden md:flex shadow-sm smooth">
        <NavbarBrand>
          <Link to={"/#hero"}>
            <img
              src="/images/logo.webp"
              alt="ECAR logo ecar"
              className="w-30 h-6"
            />
          </Link>
        </NavbarBrand>

        <NavbarContent
          className="hidden sm:flex gap-4 font-semibold "
          justify="end"
        >
          <NavbarItem>
            <Link
              color="foreground"
              to={"/#hero"}
              className="hover:text-blue-600 transition-all duration-200"
            >
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              to={"/#about"}
              className="hover:text-blue-600 transition-all duration-200"
            >
              Nosotros
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              to={"/#proposito"}
              className="hover:text-blue-600 transition-all duration-200"
            >
              Propósito
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              to={"/#service"}
              className="hover:text-blue-600 transition-all duration-200"
            >
              Servicios
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              to={"/#proyect"}
              className="hover:text-blue-600 transition-all duration-200"
            >
              Proyectos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              to={"/#locate"}
              className="hover:text-blue-600 transition-all duration-200"
            >
              Ubícanos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              to={"/#contact"}
              className="hover:text-blue-600 transition-all duration-200"
            >
              Contáctanos
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
};

export default NavDesktop;
