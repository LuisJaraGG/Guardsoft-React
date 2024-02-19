
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
        className="fixed md:hidden shadow-sm "
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

        <NavbarMenu  className=" text-center font-normal gap-y-4 ">
          <NavbarMenuItem>
            <Link
              color="foreground"
              to={"/#hero"}
              onClick={() => {
                setTimeout(() => {
                  setIsMenuOpen(false);
                }, 700);
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
                setTimeout(() => {
                  setIsMenuOpen(false);
                }, 700);
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
                setTimeout(() => {
                  setIsMenuOpen(false);
                }, 700);
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
                setTimeout(() => {
                  setIsMenuOpen(false);
                }, 700);
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
                setTimeout(() => {
                  setIsMenuOpen(false);
                }, 700);
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
                setTimeout(() => {
                  setIsMenuOpen(false);
                }, 700);
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
                setTimeout(() => {
                  setIsMenuOpen(false);
                }, 700);
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
