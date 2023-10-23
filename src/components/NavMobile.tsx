
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
const NavMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="fixed md:hidden shadow-sm h-12"
        isBlurred
      >
        <NavbarBrand>
          <Link color="foreground" to={"/#hero"}>
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

        <NavbarMenu className="w-full h-full text-center font-normal gap-y-4 -mt-5">
          <NavbarMenuItem>
            <Link
              color="foreground"
              to={"/#hero"}
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
              to={"/#about"}
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
              to={"/#proposito"}
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
              to={"/#service"}
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
              to={"/#proyect"}
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
              to={"/#locate"}
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
              to={"/#contact"}
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
