import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const amendedProductRouter = createTRPCRouter({
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

  getOne: publicProcedure.query(async ({ ctx }) => {
    try {
      const product = await ctx.db.amendedProduct.findFirst();
      if (!product) {
        throw new Error("No products found.");
      }
      return product;
    } catch (error) {
      console.error("Failed to fetch the latest product:", error);
      throw new Error("Unable to fetch the latest product at this time.");
    }
  }),
  getAll: publicProcedure
  .input(z.object({ limit: z.number().min(1).max(100) }))
  .query(async ({ ctx, input }) => {
    try {
      const limit = input.limit || 10;
      const products = await ctx.db.product.findMany({
        take: limit,
      });
      return products;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw new Error("Unable to fetch products at this time.");
    }
  }),
});
