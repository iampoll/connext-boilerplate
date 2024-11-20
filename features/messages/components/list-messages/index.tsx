"use client";

import { useEffect, useRef } from "react";
import { useListMessages } from "../../api/use-list-messages";

export const ListMessages = () => {
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

    return (
        <div ref={containerRef} className="space-y-4">
            {results.map((message) => (
                <div key={message._id} className="p-4 border rounded">
                    {message.content}
                </div>
            ))}

            {status === "LoadingMore" && (
                <div className="text-center py-4">Loading more...</div>
            )}

            <div ref={sentinelRef} className="h-4" />
        </div>
    );
};
