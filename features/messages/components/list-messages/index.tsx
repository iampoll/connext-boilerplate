"use client";

import { useRef } from "react";
import { useQuery } from "convex/react";
import { Doc } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";

import { useListMessages } from "../../api/use-list-messages";
import { useInfiniteScroll } from "../../hooks/use-infinite-scroll";
import { LoadingIndicator } from "./loading-indicator";
import { Message } from "./message";

export const ListMessages = () => {
    const user = useQuery(api.users.current);
    const { results, status, loadMore } = useListMessages();
    const containerRef = useRef<HTMLDivElement>(null);
    const sentinelRef = useRef<HTMLDivElement>(null);

    useInfiniteScroll({
        sentinelRef,
        canLoadMore: status === "CanLoadMore",
        onIntersect: () => loadMore(10),
    });

    if (!results) {
        return <LoadingIndicator />;
    }

    const isOwnMessage = (message: Doc<"messages">) =>
        message.clerkUserId === user?._id;

    return (
        <div ref={containerRef} className="space-y-4">
            {results.map((message) => (
                <Message
                    key={message._id}
                    message={message}
                    isOwnMessage={isOwnMessage(message)}
                />
            ))}

            {status === "LoadingMore" && <LoadingIndicator isLoadingMore />}
            <div ref={sentinelRef} className="h-4" />
        </div>
    );
};
