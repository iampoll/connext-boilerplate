import { useEffect, RefObject } from "react";

interface UseInfiniteScrollProps {
    sentinelRef: RefObject<HTMLDivElement>;
    canLoadMore: boolean;
    onIntersect: () => void;
}

export const useInfiniteScroll = ({
    sentinelRef,
    canLoadMore,
    onIntersect,
}: UseInfiniteScrollProps) => {
    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && canLoadMore) {
                    onIntersect();
                }
            },
            { threshold: 1 },
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [sentinelRef, canLoadMore, onIntersect]);
};
