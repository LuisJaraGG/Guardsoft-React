import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
const NavDesktop = () => {

    return (
      <Navbar
        className="fixed hidden md:flex"
      >
        <NavbarBrand>
          <Link color="foreground" href="#hero">
            <img
              src="/images/logo.webp"
              alt="ECAR logo ecar"
              className="w-30 h-6"
            />
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link
              color="foreground"
              href="#hero"
              className="hover:text-blue-600 transition-all duration-200"
            >
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#about"
              className="hover:text-blue-600 transition-all duration-200"
            >
              Nosotros
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#proposito"
              className="hover:text-blue-600 transition-all duration-200"
            >
              Propósito
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#service"
              className="hover:text-blue-600 transition-all duration-200"
            >
              Servicios
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#proyect"
              className="hover:text-blue-600 transition-all duration-200"
            >
              Proyectos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#locate"
              className="hover:text-blue-600 transition-all duration-200"
            >
              Ubicanos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#contact"
              className="hover:text-blue-600 transition-all duration-200"
            >
              Contactanos
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
};

export default NavDesktop;
