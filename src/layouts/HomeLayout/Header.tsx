"use client";

import Link from "next/link";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-content-center rounded-md bg-primary font-bold text-white">C</div>
          <span className="font-semibold">Chat App</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/auth/login" className="text-sm text-foreground/80 hover:text-foreground">Đăng nhập</Link>
          <Link href="/auth/register" className="text-sm text-primary hover:underline">Đăng ký</Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
