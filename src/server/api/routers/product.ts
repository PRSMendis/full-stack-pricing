import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    // return ctx.db.product.findMany()
    return ctx.db.product.findFirst()
  }),
  getAll: publicProcedure.query(({ ctx, input }) => {
    const posts = ctx.db.product.findMany({take: 3})
    return posts
  }),
});
