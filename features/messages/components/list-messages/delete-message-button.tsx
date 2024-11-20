import { Id } from "@/convex/_generated/dataModel";
import { useDeleteMessage } from "../../api/use-delete-message";

export const DeleteMessageButton = ({ id }: { id: Id<"messages"> }) => {
    const { mutate, isPending } = useDeleteMessage();

    const handleDelete = () => {
        mutate({ id });
    };

    return (
        <button onClick={handleDelete} disabled={isPending}>
            Delete Message
        </button>
    );
};
