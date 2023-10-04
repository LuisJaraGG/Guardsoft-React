
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
const NavMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <Navbar
      
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="fixed md:hidden shadow-sm"
        isBlurred
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

        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarMenu className="w-full text-center font-normal gap-y-4 ">
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="#hero"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Inicio
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="#about"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Nosotros
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="#proposito"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Propósito
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="#service"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Servicios
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="#proyect"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Proyects
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="#locate"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Ubícanos
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="#contact"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Contáctanos
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    );
};

export default NavMobile;
