import type { MENU_ITEM_ADMIN, MENU_ITEM_CUSTOMER } from "@/constants";

type ItemsCustomer = typeof MENU_ITEM_CUSTOMER;
type ItemsAdmin = typeof MENU_ITEM_ADMIN;

type ItemsCustomerItem =
  (typeof MENU_ITEM_CUSTOMER)[keyof typeof MENU_ITEM_CUSTOMER];

export type { ItemsCustomer, ItemsAdmin, ItemsCustomerItem };
