import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getCurrentUser } from "./users";
import { paginationOptsValidator } from "convex/server";

export const create = mutation({
    args: {
        content: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await getCurrentUser(ctx);
        if (!user) {
            throw new Error("Unauthorized");
        }

        const message = await ctx.db.insert("messages", {
            clerkUserId: user._id,
            content: args.content,
            name: user.username ?? user.email,
        });

        return message;
    },
});

export const list = query({
    args: { paginationOpts: paginationOptsValidator },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("messages")
            .order("desc")
            .paginate(args.paginationOpts);
    },
});

export const deleteById = mutation({
    args: { id: v.id("messages") },
    handler: async (ctx, args) => {
        return await ctx.db.delete(args.id);
    },
});
