"use client";

import { useState } from "react";

import { useCreateMessage } from "@/features/messages/api/use-create-message";

export default function CreateMessage() {
    const { mutate, isPending } = useCreateMessage();
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (content.length === 0) return;

        mutate({ content }, { onSuccess: () => setContent("") });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                required
                type="text"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <button type="submit" disabled={isPending}>
                {isPending ? "Sending..." : "Send"}
            </button>
        </form>
    );
}
