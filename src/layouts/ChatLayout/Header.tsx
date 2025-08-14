"use client";

import Link from "next/link";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import Avatar from "@/components/common/Avatar";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Avatar name={user?.username || user?.email || ""} size={40} />
            <div>
              <div className="font-semibold text-foreground">{user?.username || user?.email}</div>
              <div className="flex items-center gap-2 text-xs text-foreground/60">
                <span className={`h-2 w-2 rounded-full ${true ? 'bg-green-500' : 'bg-foreground/30'}`}></span>
                {true ? 'Đang hoạt động' : 'Không hoạt động'}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/search">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              🔍 Tìm kiếm
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            ⚙️ Cài đặt
          </Button>
          <Link href="/search">
            <Button
              variant="secondary"
              size="sm"
              className="md:hidden"
            >
              🔍 Tìm kiếm
            </Button>
          </Link>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => { }}
            className="md:hidden"
          >
            📋 Danh sách
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => { }}
            className="md:hidden"
          >
            ℹ️ Thông tin
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
