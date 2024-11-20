import { Doc } from "@/convex/_generated/dataModel";
import { DeleteMessageButton } from "./delete-message-button";

interface MessageProps {
    message: Doc<"messages">;
    isOwnMessage: boolean;
}

export const Message = ({ message, isOwnMessage }: MessageProps) => (
    <section
        className={`p-4 border rounded ${isOwnMessage ? "text-right" : "text-left"}`}
    >
        <p className="text-xs font-bold">{message.name}</p>

        {isOwnMessage && <DeleteMessageButton id={message._id} />}

        <p>{message.content}</p>
    </section>
);
