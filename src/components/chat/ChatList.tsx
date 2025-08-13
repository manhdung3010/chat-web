import React from "react";
import Avatar from "@/components/common/Avatar";

export type ChatItem = {
    id: string;
    name: string;
    lastMessage: string;
    avatar?: string;
    online?: boolean;
    unread?: number;
    active?: boolean;
};

type ChatListProps = {
    items: ChatItem[];
    onSelect: (id: string) => void;
};

export default function ChatList({ items, onSelect }: ChatListProps) {
    return (
        <ul className="space-y-2">
            {items.map((item) => (
                <li key={item.id}>
                    <button
                        onClick={() => onSelect(item.id)}
                        className={`flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-left transition-all duration-200 text-foreground hover:bg-secondary/50 hover:border-border/50 ${item.active
                            ? "bg-secondary border-border shadow-sm"
                            : ""
                            }`}
                    >
                        <Avatar name={item.name} src={item.avatar} status={item.online ? "online" : "offline"} />
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                                <p className="truncate font-medium text-foreground">{item.name}</p>
                                {item.unread ? (
                                    <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary px-1 text-xs text-primary-foreground font-medium">
                                        {item.unread}
                                    </span>
                                ) : null}
                            </div>
                            <p className="truncate text-sm text-foreground/60">{item.lastMessage}</p>
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    );
}


