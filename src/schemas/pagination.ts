import z from "zod";

const paginationmailSchema = z.strictObject({
  page: z.number().min(0),
  limit: z.number().min(0),
  total: z.number().min(0),
  totalPages: z.number().min(0),
  hasNextPage: z.boolean(),
  hasPreviousPage: z.boolean(),
});

export { paginationmailSchema };
