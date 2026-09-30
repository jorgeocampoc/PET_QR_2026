import type { VIEW_TITLE } from "@/constants";

type ViewTitle = (typeof VIEW_TITLE)[keyof typeof VIEW_TITLE];

export type { ViewTitle };
