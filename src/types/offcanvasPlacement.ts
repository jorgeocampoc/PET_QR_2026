import type { PLACEMENT } from "@/constants";

type PlacementCanvas = (typeof PLACEMENT)[keyof typeof PLACEMENT];

export type { PlacementCanvas };
