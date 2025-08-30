import { paths } from "./paths";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "BookedIn",
  description: "Manage your bookings with ease",
  navItems: [
    {
      label: "Home",
      href: paths.home,
    },
    {
      label: "Dashboard",
      href: paths.dashboard,
    },
    {
      label: "Calendar",
      href: paths.calendar,
    },
  ],
  links: {
    home: paths.home,
    login: paths.login,
    logout: paths.logout,
  },
};
