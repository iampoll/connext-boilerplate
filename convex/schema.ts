import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        clerkUserId: v.string(),
        imageUrl: v.string(),
        email: v.string(), // set as required for use as primary contact information
        username: v.optional(v.string()), // set as required for use as unique identifier in app
        firstName: v.optional(v.string()),
        lastName: v.optional(v.string()),
    })
        .index("by_username", ["username"])
        .index("by_clerkUserId", ["clerkUserId"]),

    messages: defineTable({
        clerkUserId: v.string(),
        content: v.string(),
        name: v.string(),
    }).index("by_clerkUserId", ["clerkUserId"]),
});
