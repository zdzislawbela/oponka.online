import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { Image } from "@heroui/image";
import { matchPath } from "react-router-dom";

import { useAuthUser } from "../hooks/useAuthUser";

import { title } from "./primitives";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const location = useLocation();
  const { user } = useAuthUser();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <span>Booked</span>
            <span className={title({ color: "yellow" })}>In</span>
          </Link>
        </NavbarBrand>
        <div className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            const isActive = matchPath(item.href, location.pathname);

            return (
              <NavbarItem key={item.href}>
                <Link
                  className={clsx(
                    linkStyles({ color: isActive ? "primary" : "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex">
          {user ? (
            <div className="flex items-center gap-3 mr-4">
              <span className="flex gap-1">
                <span className="text-sm">{"Hello"}</span>
                <span className="text-sm">{user.displayName}</span>
              </span>
              <Image
                alt={user.displayName || "User"}
                className="w-8 h-8 rounded-full"
                src={user.photoURL || "/default-avatar.png"}
              />
              <Button
                as={Link}
                className="text-sm font-normal text-default-600 bg-default-100"
                href={siteConfig.links.logout}
                variant="flat"
              >
                Log out
              </Button>
            </div>
          ) : (
            <Button
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.links.login}
              variant="flat"
            >
              Log in
            </Button>
          )}
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 gap-4" justify="end">
        <NavbarMenuToggle />
        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => {
            const isActive = location.pathname === item.href;

            return (
              <NavbarMenuItem key={`${item.href}-${index}`}>
                <Link
                  color={isActive ? "primary" : "foreground"}
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
          <NavbarMenuItem>
            <Link
              color={user ? "danger" : "foreground"}
              href={user ? siteConfig.links.logout : siteConfig.links.login}
              size="lg"
            >
              {user ? "Log out" : "Log in"}
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
