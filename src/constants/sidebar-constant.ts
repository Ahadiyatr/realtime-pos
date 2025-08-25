import {
  Album,
  Armchair,
  LayoutDashboard,
  SquareMenu,
  Users,
} from "lucide-react";
import { title } from "process";

export const SIDEBAR_MENU_LIST = {
  admin: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Order",
      url: "/order",
      icon: Album,
    },
    {
      title: "Menu",
      url: "/admin/menu",
      icon: SquareMenu,
    },
    {
      title: "Table",
      url: "/admin/table",
      icon: Armchair,
    },
    {
      title: "User",
      url: "/admin/user",
      icon: Users,
    },
  ],
  cashier: [],
  kithcen: [],
};

export type SidebarMenuKey = keyof typeof SIDEBAR_MENU_LIST;
