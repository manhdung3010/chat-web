"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TextInput } from "@/components/common/Input";
import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";

export default function RegisterPage() {
    return (
        <div className="container flex min-h-[70vh] items-center justify-center py-16">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-sm"
            >
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold">Đăng ký</h1>
                    <p className="text-foreground/60">Tạo tài khoản mới</p>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        window.location.href = "/chat";
                    }}
                    className="space-y-4"
                >
                    <FormField label="Họ và tên">
                        <TextInput placeholder="Nguyễn Văn A" required />
                    </FormField>
                    <FormField label="Email">
                        <TextInput type="email" placeholder="you@example.com" required />
                    </FormField>
                    <FormField label="Mật khẩu">
                        <TextInput type="password" placeholder="••••••••" required />
                    </FormField>
                    <FormField label="Nhập lại mật khẩu">
                        <TextInput type="password" placeholder="••••••••" required />
                    </FormField>
                    <Button onClick={() => { }} type="submit" className="w-full">Tạo tài khoản</Button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Đã có tài khoản? {" "}
                    <Link href="/auth/login" className="text-primary hover:underline">Đăng nhập</Link>
                </p>
            </motion.div>
        </div>
    );
}