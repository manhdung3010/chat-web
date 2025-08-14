import { Metadata } from 'next';
import ChatPage from "@/modules/Chat";
import ChatLayout from '@/layouts/ChatLayout';

export const metadata: Metadata = {
  title: 'Chat - Trò chuyện trực tuyến | Chat App',
  description: 'Trò chuyện trực tuyến với giao diện đẹp, hỗ trợ realtime messaging, dark mode và trải nghiệm người dùng tuyệt vời.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Chat() {
  return <ChatLayout>
    <ChatPage />
  </ChatLayout>
}