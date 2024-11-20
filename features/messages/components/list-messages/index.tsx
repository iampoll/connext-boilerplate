"use client";

import { useEffect, useRef } from "react";

import { Doc } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";

import { useListMessages } from "../../api/use-list-messages";
import { useQuery } from "convex/react";

export const ListMessages = () => {
    const user = useQuery(api.users.current);

    const { results, status, loadMore } = useListMessages();
    const containerRef = useRef<HTMLDivElement>(null);
    const sentinelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && status === "CanLoadMore") {
                    loadMore(10);
                }
            },
            { threshold: 1 },
        );

        observer.observe(sentinel);

        return () => {
            observer.disconnect();
        };
    }, [status, loadMore]);

    if (!results) {
        return <div>Loading...</div>;
    }

    const sentByMe = (message: Doc<"messages">) => {
        console.log(message.clerkUserId, user?._id);

        return message.clerkUserId === user?._id;
    };

    return (
        <div ref={containerRef} className="space-y-4">
            {results.map((message) => (
                <div
                    key={message._id}
                    className={`p-4 border rounded ${sentByMe(message) ? "text-right" : "text-left"}`}
                >
                    <p className="text-xs font-bold">{message.name}</p>

                    <span>{message.content}</span>
                </div>
            ))}

            {status === "LoadingMore" && (
                <div className="text-center py-4">Loading more...</div>
            )}

            <div ref={sentinelRef} className="h-4" />
        </div>
    );
};
