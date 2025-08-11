"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TextInput } from "@/components/common/Input";
import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";

export default function LoginPage() {
  return (
    <div className="container flex min-h-[70vh] items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-sm"
      >
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Đăng nhập</h1>
          <p className="text-foreground/60">Chào mừng bạn trở lại</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/chat";
          }}
          className="space-y-4"
        >
          <FormField label="Email">
            <TextInput type="email" placeholder="you@example.com" required />
          </FormField>
          <FormField label="Mật khẩu">
            <TextInput type="password" placeholder="••••••••" required />
          </FormField>
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-input text-primary focus:ring-primary/30" />
              Ghi nhớ đăng nhập
            </label>
            <Link href="#" className="text-primary hover:underline">Quên mật khẩu?</Link>
          </div>
          <Button onClick={() => { }} type="submit" className="w-full">Đăng nhập</Button>
        </form>
        <p className="mt-4 text-center text-sm">
          Chưa có tài khoản? {" "}
          <Link href="/auth/register" className="text-primary hover:underline">Đăng ký</Link>
        </p>
      </motion.div>
    </div>
  );
}