import type { BTN_NAVIGATION } from "@/constants";
import type { paginationmailSchema } from "@/schemas";
import type { Ref } from "vue";
import z from "zod";

type PaginationmailSchema = z.infer<typeof paginationmailSchema>;
type PaginationContect = {
  currentPage: Ref<number>;
};
type BtnNavigation = (typeof BTN_NAVIGATION)[keyof typeof BTN_NAVIGATION];

export type { PaginationmailSchema, PaginationContect, BtnNavigation };
