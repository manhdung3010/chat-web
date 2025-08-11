import React from "react";
import Avatar from "@/components/common/Avatar";
import { motion } from "framer-motion";

type MessageBubbleProps = {
    id: string;
    author: { id: string; name: string; avatar?: string };
    content: string;
    createdAt: string;
    isOwn?: boolean;
};

export default function MessageBubble({ author, content, createdAt, isOwn }: MessageBubbleProps) {
    return (
        <div className={`flex w-full items-end gap-3 ${isOwn ? "justify-end" : "justify-start"}`}>
            {!isOwn && <Avatar name={author.name} src={author.avatar} size={32} />}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow-sm ${isOwn
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
            >
                <div className="whitespace-pre-wrap leading-relaxed">{content}</div>
                <div className={`mt-2 text-[10px] ${isOwn
                        ? "text-primary-foreground/70"
                        : "text-secondary-foreground/60"
                    }`}>
                    {createdAt}
                </div>
            </motion.div>
            {isOwn && <Avatar name={author.name} src={author.avatar} size={32} />}
        </div>
    );
}


