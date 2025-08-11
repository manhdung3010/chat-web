"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Textarea from "@/components/common/Textarea";
import Button from "@/components/common/Button";

type ChatInputProps = {
    onSend: (text: string) => void;
};

export default function ChatInput({ onSend }: ChatInputProps) {
    const [text, setText] = useState("");

    const handleSend = () => {
        const value = text.trim();
        if (!value) return;
        onSend(value);
        setText("");
    };

    return (
        <div className="border-t border-border/50 bg-card/50 backdrop-blur-sm p-4">
            <div className="flex items-center justify-center gap-3">
                <button
                    className="h-12 w-12 shrink-0 rounded-xl border border-border bg-background text-xl hover:bg-secondary transition-all duration-200 hover:border-border/70"
                    aria-label="Emoji"
                >
                    😊
                </button>
                <div className="flex-1">
                    <Textarea
                        rows={1}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        placeholder="Nhập tin nhắn..."
                        className="resize-none rounded-xl border-border bg-background focus:border-primary focus:ring-primary/20"
                    />
                </div>
                <motion.div whileTap={{ scale: 0.97 }}>
                    <Button
                        onClick={handleSend}
                        variant="primary"
                        size="lg"
                        className="h-12 px-6"
                        disabled={!text.trim()}
                    >
                        Gửi
                    </Button>
                </motion.div>
                <button
                    className="h-12 w-12 shrink-0 rounded-xl border border-border bg-background text-xl hover:bg-secondary transition-all duration-200 hover:border-border/70"
                    aria-label="Đính kèm"
                >
                    📎
                </button>
            </div>
        </div>
    );
}


