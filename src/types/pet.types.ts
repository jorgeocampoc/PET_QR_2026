import type { SPECIES } from "@/constants";
import type { petSchema, registerPetSchema, updatePetSchema } from "@/schemas";
import z from "zod";
type RegisterPetSchema = z.infer<typeof registerPetSchema>;
type UpdatePetSchema = z.infer<typeof updatePetSchema>;
type PetSchema = z.infer<typeof petSchema>;
type Species = typeof SPECIES;
export type { RegisterPetSchema, Species, PetSchema, UpdatePetSchema };
