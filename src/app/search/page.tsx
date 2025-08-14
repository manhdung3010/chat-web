import { Metadata } from 'next';
import SearchPage from "@/modules/Search";
import ChatLayout from '@/layouts/ChatLayout';

export const metadata: Metadata = {
    title: 'Tìm kiếm - Tìm người bạn mới | Chat App',
    description: 'Tìm kiếm và kết nối với những người bạn mới. Khám phá cộng đồng và mở rộng mạng lưới của bạn.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function Search() {
    return <ChatLayout>
        <SearchPage />
    </ChatLayout>
}

