"use client";

import Link from "next/link";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <>


      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-4 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground grid place-content-center font-bold text-lg shadow-lg">
                C
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Chat App
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >

            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground/80">
                    Xin chào, {user?.username || user?.email}
                  </span>
                  <button
                    onClick={logout}
                    className="text-sm text-red-600 hover:text-red-500"
                  >
                    Đăng xuất
                  </button>
                </div>
                <Button variant="gradient" size="md">
                  Bắt đầu miễn phí
                </Button>
              </>
            ) : (
              <Link href="/auth/login" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                <Button variant="gradient" size="md">
                  Đăng nhập
                </Button>
              </Link>

            )}


            <ThemeToggle />
          </motion.div>
        </div>
      </header>
    </>
  );
}
