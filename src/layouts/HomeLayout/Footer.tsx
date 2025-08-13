import Link from "next/link";

export default function Footer() {
  return (
    < footer className="border-t border-border/50 bg-muted/20 py-12" >
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground grid place-content-center font-bold text-sm">
              C
            </div>
            <span className="text-lg font-semibold">Chat App</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <Link href="#" className="hover:text-foreground transition-colors">Về chúng tôi</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Tính năng</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Hỗ trợ</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Liên hệ</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border/30 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; 2024 Chat App. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </ footer>
  );
}
