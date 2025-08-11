export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container flex flex-col items-center justify-between gap-4 text-center text-sm text-foreground/70 md:flex-row">
        <p>
          © {new Date().getFullYear()} Chat App. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a href="#features" className="hover:text-foreground">Tính năng</a>
          <a href="#" className="hover:text-foreground">Bảo mật</a>
          <a href="#" className="hover:text-foreground">Điều khoản</a>
        </div>
      </div>
    </footer>
  );
}
