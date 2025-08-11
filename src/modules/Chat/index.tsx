"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatList, { ChatItem } from "@/components/chat/ChatList";
import MessageBubble from "@/components/chat/MessageBubble";
import ChatInput from "@/components/chat/ChatInput";
import Avatar from "@/components/common/Avatar";
import ThemeToggle from "@/components/common/ThemeToggle";
import Button from "@/components/common/Button";

type Message = {
    id: string;
    chatId: string;
    author: { id: string; name: string; avatar?: string };
    content: string;
    createdAt: string;
};

const mockChats: ChatItem[] = [
    { id: "1", name: "Minh An", lastMessage: "Hẹn 3h nhé!", online: true, unread: 2, active: true },
    { id: "2", name: "Lan Phương", lastMessage: "Nhớ gửi file nhe~", online: false, unread: 0 },
    { id: "3", name: "Team Marketing", lastMessage: "OK đã rõ", online: false, unread: 0 },
    { id: "4", name: "Trung Kiên", lastMessage: "Code review xong rồi", online: true, unread: 1 },
    { id: "5", name: "Thu Hà", lastMessage: "Design đã approve", online: false, unread: 0 },
];

const mockMessages: Message[] = [
    { id: "m1", chatId: "1", author: { id: "u1", name: "Minh An" }, content: "Hello 👋", createdAt: "10:00" },
    { id: "m2", chatId: "1", author: { id: "me", name: "Tôi" }, content: "Chào bạn! Có gì mới không?", createdAt: "10:01" },
    { id: "m3", chatId: "1", author: { id: "u1", name: "Minh An" }, content: "Hẹn 3h nhé! Có meeting quan trọng", createdAt: "10:02" },
    { id: "m4", chatId: "1", author: { id: "me", name: "Tôi" }, content: "OK, tôi sẽ chuẩn bị đầy đủ tài liệu", createdAt: "10:03" },
];

export default function ChatPage() {
    const [chats, setChats] = useState<ChatItem[]>(mockChats);
    const [activeId, setActiveId] = useState<string>(mockChats[0].id);
    const [messages, setMessages] = useState<Message[]>(mockMessages);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    const activeMessages = useMemo(() => messages.filter((m) => m.chatId === activeId), [messages, activeId]);
    const activeChat = chats.find((c) => c.id === activeId)!;

    const handleSelectChat = (id: string) => {
        setActiveId(id);
        setChats((prev) => prev.map((c) => ({ ...c, active: c.id === id })));
    };

    const handleSend = (text: string) => {
        const newMessage: Message = {
            id: Math.random().toString(36).slice(2),
            chatId: activeId,
            author: { id: "me", name: "Tôi" },
            content: text,
            createdAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    return (
        <div className="grid h-screen grid-rows-[auto,1fr] bg-background">
            {/* Header */}
            <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="container flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <Avatar name={activeChat.name} size={40} />
                            <div>
                                <div className="font-semibold text-foreground">{activeChat.name}</div>
                                <div className="flex items-center gap-2 text-xs text-foreground/60">
                                    <span className={`h-2 w-2 rounded-full ${activeChat.online ? 'bg-green-500' : 'bg-foreground/30'}`}></span>
                                    {activeChat.online ? 'Đang hoạt động' : 'Không hoạt động'}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                            🔍 Tìm kiếm
                        </Button>
                        <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                            ⚙️ Cài đặt
                        </Button>
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setShowLeft(true)}
                            className="md:hidden"
                        >
                            📋 Danh sách
                        </Button>
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setShowRight(true)}
                            className="md:hidden"
                        >
                            ℹ️ Thông tin
                        </Button>
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-[320px,1fr,300px]">
                {/* Left Sidebar - Chat List */}
                <aside className="hidden h-[calc(100vh-64px)] border-r border-border/50 bg-card/30 md:block">
                    <div className="flex h-full flex-col">
                        <div className="border-b border-border/50 p-4">
                            <div className="relative">
                                <input
                                    placeholder="Tìm kiếm cuộc trò chuyện..."
                                    className="w-full rounded-xl border border-border bg-background px-4 py-3 pl-10 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40">🔍</span>
                            </div>
                        </div>
                        <div className="min-h-0 flex-1 overflow-y-auto p-3">
                            <ChatList items={chats} onSelect={handleSelectChat} />
                        </div>
                    </div>
                </aside>

                {/* Main Chat Area */}
                <main className="flex h-[calc(100vh-64px)] flex-col bg-background">
                    <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-6">
                        <AnimatePresence initial={false}>
                            {activeMessages.map((m) => (
                                <motion.div
                                    key={m.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <MessageBubble
                                        id={m.id}
                                        author={m.author}
                                        content={m.content}
                                        createdAt={m.createdAt}
                                        isOwn={m.author.id === "me"}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    <ChatInput onSend={handleSend} />
                </main>

                {/* Right Sidebar - Chat Info */}
                <aside className="hidden h-[calc(100vh-64px)] border-l border-border/50 bg-card/30 md:block">
                    <div className="flex h-full flex-col">
                        <div className="border-b border-border/50 p-4">
                            <div className="text-sm font-semibold text-foreground">Thông tin cuộc trò chuyện</div>
                        </div>
                        <div className="min-h-0 flex-1 overflow-y-auto p-4">
                            <div className="space-y-4">
                                {/* Chat Info Card */}
                                <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <Avatar name={activeChat.name} size={56} />
                                        <div className="flex-1">
                                            <div className="font-semibold text-foreground">{activeChat.name}</div>
                                            <div className="text-sm text-foreground/60">Thành viên</div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <span className={`h-2 w-2 rounded-full ${activeChat.online ? 'bg-green-500' : 'bg-foreground/30'}`}></span>
                                                <span className="text-xs text-foreground/60">
                                                    {activeChat.online ? 'Trực tuyến' : 'Không trực tuyến'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="rounded-2xl border border-border/50 bg-card p-4 shadow-sm">
                                    <h4 className="mb-3 text-sm font-semibold text-foreground">Hành động nhanh</h4>
                                    <div className="space-y-2">
                                        <Button variant="ghost" size="sm" className="w-full justify-start">
                                            🔔 Thông báo
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full justify-start">
                                            ✏️ Đổi tên
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full justify-start">
                                            📷 Ảnh đại diện
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full justify-start">
                                            🗑️ Xóa cuộc trò chuyện
                                        </Button>
                                    </div>
                                </div>

                                {/* Media Files */}
                                <div className="rounded-2xl border border-border/50 bg-card p-4 shadow-sm">
                                    <h4 className="mb-3 text-sm font-semibold text-foreground">Tệp đã chia sẻ</h4>
                                    <div className="text-center py-8 text-foreground/40">
                                        <div className="text-2xl mb-2">📁</div>
                                        <p className="text-sm">Chưa có tệp nào</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Mobile Overlays */}
            <AnimatePresence>
                {showLeft && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
                        onClick={() => setShowLeft(false)}
                    >
                        <motion.aside
                            initial={{ x: -320 }}
                            animate={{ x: 0 }}
                            exit={{ x: -320 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute inset-y-0 left-0 w-80 bg-card shadow-2xl"
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                        >
                            <div className="flex h-full flex-col">
                                <div className="flex items-center justify-between border-b border-border/50 p-4">
                                    <div className="text-sm font-semibold text-foreground">Danh sách trò chuyện</div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setShowLeft(false)}
                                    >
                                        ✕
                                    </Button>
                                </div>
                                <div className="min-h-0 flex-1 overflow-y-auto p-3">
                                    <ChatList
                                        items={chats}
                                        onSelect={(id) => {
                                            handleSelectChat(id);
                                            setShowLeft(false);
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showRight && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
                        onClick={() => setShowRight(false)}
                    >
                        <motion.aside
                            initial={{ x: 320 }}
                            animate={{ x: 0 }}
                            exit={{ x: 320 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute inset-y-0 right-0 w-80 bg-card shadow-2xl"
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                        >
                            <div className="flex h-full flex-col">
                                <div className="flex items-center justify-between border-b border-border/50 p-4">
                                    <div className="text-sm font-semibold text-foreground">Thông tin cuộc trò chuyện</div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setShowRight(false)}
                                    >
                                        ✕
                                    </Button>
                                </div>
                                <div className="min-h-0 flex-1 overflow-y-auto p-4">
                                    <div className="space-y-4">
                                        <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                                            <div className="flex items-center gap-4">
                                                <Avatar name={activeChat.name} size={56} />
                                                <div className="flex-1">
                                                    <div className="font-semibold text-foreground">{activeChat.name}</div>
                                                    <div className="text-sm text-foreground/60">Thành viên</div>
                                                    <div className="mt-2 flex items-center gap-2">
                                                        <span className={`h-2 w-2 rounded-full ${activeChat.online ? 'bg-green-500' : 'bg-foreground/30'}`}></span>
                                                        <span className="text-xs text-foreground/60">
                                                            {activeChat.online ? 'Trực tuyến' : 'Không trực tuyến'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}