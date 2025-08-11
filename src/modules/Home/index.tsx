"use client";

import Link from "next/link";
import ThemeToggle from "@/components/common/ThemeToggle";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      {/* Header */}
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
            <Link href="/auth/login" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Đăng nhập
            </Link>
            <Link href="/auth/register">
              <Button variant="gradient" size="md">
                Bắt đầu miễn phí
              </Button>
            </Link>
            <ThemeToggle />
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary"
                >
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  Đã có hơn 10,000+ người dùng tin tưởng
                </motion.div>
                <h1 className="text-4xl font-bold leading-tight lg:text-6xl xl:text-7xl">
                  Trò chuyện hiện đại với
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Chat App</span>
                </h1>
                <p className="text-lg text-foreground/70 lg:text-xl">
                  Nền tảng chat với giao diện đẹp mắt, hỗ trợ dark mode, realtime messaging và trải nghiệm người dùng tuyệt vời.
                  Kết nối với bạn bè và đồng nghiệp một cách dễ dàng và chuyên nghiệp.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/auth/register">
                  <Button variant="gradient" size="lg" className="shadow-xl">
                    Bắt đầu ngay
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="secondary" size="lg">
                    Xem tính năng
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { value: "99.9%", label: "Uptime" },
                  { value: "24/7", label: "Hỗ trợ" },
                  { value: "10K+", label: "Người dùng" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-primary lg:text-3xl">{stat.value}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
                <div className="relative aspect-[4/3] w-full rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 shadow-2xl backdrop-blur-sm">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-dashed border-primary/30 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 mx-auto flex items-center justify-center">
                        <span className="text-2xl text-primary-foreground">💬</span>
                      </div>
                      <p className="text-foreground/60">Giao diện chat hiện đại</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl font-bold lg:text-4xl">
              Tính năng nổi bật
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Khám phá những tính năng độc đáo giúp Chat App trở thành lựa chọn hàng đầu cho việc trò chuyện
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Realtime UI",
                desc: "Animation mượt mà, cảm giác realtime khi gửi và nhận tin nhắn với hiệu ứng đẹp mắt.",
                color: "from-primary to-primary/80"
              },
              {
                icon: "🌙",
                title: "Dark Mode",
                desc: "Tối ưu cho cả chế độ sáng và tối, bảo vệ mắt và tăng trải nghiệm sử dụng.",
                color: "from-secondary to-secondary/80"
              },
              {
                icon: "🔧",
                title: "Tái sử dụng",
                desc: "Component rõ ràng, type-safe, dễ dàng mở rộng và tùy chỉnh theo nhu cầu.",
                color: "from-accent to-accent/80"
              },
              {
                icon: "🔒",
                title: "Bảo mật cao",
                desc: "Mã hóa end-to-end, bảo vệ thông tin cá nhân và tin nhắn của bạn an toàn tuyệt đối.",
                color: "from-destructive to-destructive/80"
              },
              {
                icon: "📱",
                title: "Responsive",
                desc: "Tương thích hoàn hảo trên mọi thiết bị từ desktop đến mobile với giao diện tối ưu.",
                color: "from-primary/80 to-accent"
              },
              {
                icon: "🚀",
                title: "Hiệu suất cao",
                desc: "Tốc độ tải nhanh, sử dụng ít tài nguyên và trải nghiệm mượt mà trên mọi kết nối.",
                color: "from-accent to-primary"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-primary-foreground text-xl mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl font-bold lg:text-4xl">
              Khách hàng nói gì
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Những phản hồi tích cực từ người dùng đã trải nghiệm Chat App
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Hoàng Nam",
                role: "Product Manager",
                avatar: "HN",
                quote: "UI rất mượt và sạch sẽ, team onboard cực nhanh. Giao diện intuitive giúp tăng hiệu quả làm việc đáng kể.",
                rating: 5
              },
              {
                name: "Thu Hà",
                role: "UI/UX Designer",
                avatar: "TH",
                quote: "Màu sắc chủ đạo phối rất đẹp, dark mode êm mắt. Component system rất tốt cho việc thiết kế và phát triển.",
                rating: 5
              },
              {
                name: "Trung Kiên",
                role: "Frontend Developer",
                avatar: "TK",
                quote: "Codebase rõ ràng, component tái sử dụng tốt. Performance optimization rất ấn tượng, load time nhanh.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="h-full rounded-2xl border border-border/50 bg-card p-8 shadow-lg">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <blockquote className="text-foreground/80 mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-foreground/60">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-8 lg:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/10 to-transparent"></div>
            <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary-foreground lg:text-3xl">
                  Sẵn sàng trải nghiệm?
                </h3>
                <p className="text-primary-foreground/90 text-lg">
                  Đăng ký miễn phí và bắt đầu trò chuyện với bạn bè, đồng nghiệp ngay hôm nay.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/auth/register">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl"
                  >
                    Bắt đầu miễn phí
                  </Button>
                </Link>
                <Link href="/chat">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                  >
                    Thử demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/20 py-12">
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
      </footer>
    </div>
  );
}
