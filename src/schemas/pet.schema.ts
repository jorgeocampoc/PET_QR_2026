import { FIELD_REQUIRED, REGEX_NAME_PET, SPECIES } from "@/constants";
import z from "zod";
const registerPetSchema = z.object({
  pet_name: z
    .string({
      required_error: FIELD_REQUIRED,
    })
    .trim()
    .regex(REGEX_NAME_PET, FIELD_REQUIRED),
  species: z.enum(Object.values(SPECIES) as [string, ...string[]]),
  reference: z
    .string({
      required_error: FIELD_REQUIRED,
    })
    .trim()
    .min(1, FIELD_REQUIRED),
  image: z.instanceof(File, { message: FIELD_REQUIRED }),
});

const petSchema = registerPetSchema
  .omit({
    image: true,
  })
  .extend({
    id: z.string().uuid(),
    updated_at: z.date(),
    created_at: z.date(),
    qr_code: z.string(),
    img_url: z.string(),
  });

const updatePetSchema = registerPetSchema
  .omit({
    image: true,
  })
  .extend({
    id: z
      .string({
        required_error: FIELD_REQUIRED,
      })
      .uuid(),
  });

export { registerPetSchema, petSchema, updatePetSchema };
