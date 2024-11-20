interface LoadingIndicatorProps {
    isLoadingMore?: boolean;
}

export const LoadingIndicator = ({ isLoadingMore }: LoadingIndicatorProps) => (
    <div className="text-center py-4">
        {isLoadingMore ? "Loading more..." : "Loading..."}
    </div>
);
