import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { getCurrentUser } from "./users";

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
        });

        return message;
    },
});
