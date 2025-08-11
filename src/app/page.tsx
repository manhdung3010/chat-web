import { Metadata } from 'next';
import HomePage from "@/modules/Home";

export const metadata: Metadata = {
  title: 'Chat App - Nền tảng trò chuyện hiện đại và chuyên nghiệp',
  description: 'Khám phá Chat App - ứng dụng chat với giao diện đẹp, hỗ trợ dark mode, realtime messaging và trải nghiệm người dùng tuyệt vời. Đăng ký miễn phí ngay hôm nay!',
  keywords: 'chat app, messaging, realtime chat, dark mode, modern UI, trò chuyện, nhắn tin',
  authors: [{ name: 'Chat App Team' }],
  openGraph: {
    title: 'Chat App - Nền tảng trò chuyện hiện đại',
    description: 'Ứng dụng chat với giao diện đẹp, hỗ trợ dark mode và realtime messaging',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chat App - Nền tảng trò chuyện hiện đại',
    description: 'Ứng dụng chat với giao diện đẹp, hỗ trợ dark mode và realtime messaging',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <HomePage />
  );
}
