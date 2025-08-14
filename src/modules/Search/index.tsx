"use client";

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import Avatar from '@/components/common/Avatar';
import { SearchIcon } from '@/Icons/SearchIcon';
import { useUserSearch } from '@/hooks/useUserSearch';
import UserCard from '@/components/search/UserCard';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { Input } from '@/components/common/Input';

export default function SearchPage() {
    const router = useRouter();
    const {
        query,
        filter,
        users,
        isLoading,
        error,
        total,
        hasMore,
        setQuery,
        setFilter,
        loadMore,
        clearSearch,
        addFriend,
        isEmpty,
        hasResults
    } = useUserSearch();

    const handleStartChat = (userId: string) => {
        // Navigate to chat with this user
        router.push(`/chat?user=${userId}`);
    };

    return (
        <div className="flex h-full flex-col bg-background">
            {/* Search Header */}
            <div className="border-b border-border/50 bg-card/50 p-4">
                <div className="container mx-auto">
                    <h1 className="mb-4 text-2xl font-bold text-foreground">Tìm kiếm người dùng</h1>

                    {/* Search Input */}
                    <div className="flex gap-3">
                        <div className="flex-1 relative">
                            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
                            <Input
                                type="text"
                                placeholder="Tìm kiếm theo tên, email hoặc mô tả..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <Button onClick={clearSearch} disabled={isLoading}>
                            {isLoading ? <LoadingSpinner size="sm" /> : 'Xóa'}
                        </Button>
                    </div>

                    {/* Filters */}
                    <div className="mt-4 flex gap-2">
                        <Button
                            variant={filter === 'all' ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setFilter('all')}
                        >
                            Tất cả
                        </Button>
                        <Button
                            variant={filter === 'online' ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setFilter('online')}
                        >
                            Đang online
                        </Button>
                        <Button
                            variant={filter === 'recent' ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setFilter('recent')}
                        >
                            Hoạt động gần đây
                        </Button>
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="container mx-auto">
                    {error && (
                        <div className="mb-4 rounded-lg bg-destructive/10 p-4 text-destructive">
                            {error}
                        </div>
                    )}

                    {total > 0 && (
                        <div className="mb-4 text-sm text-foreground/60">
                            Tìm thấy {total} kết quả
                        </div>
                    )}

                    {isEmpty ? (
                        <div className="flex h-64 items-center justify-center">
                            <div className="text-center">
                                <div className="mb-2 text-4xl">🔍</div>
                                <h3 className="mb-2 text-lg font-semibold text-foreground">
                                    {query.trim() ? 'Không tìm thấy kết quả' : 'Bắt đầu tìm kiếm'}
                                </h3>
                                <p className="text-foreground/60">
                                    {query.trim()
                                        ? 'Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc'
                                        : 'Nhập từ khóa để tìm kiếm người dùng'
                                    }
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {users.map((user) => (
                                <UserCard
                                    key={user.id}
                                    user={user}
                                    onAddFriend={addFriend}
                                    onStartChat={handleStartChat}
                                />
                            ))}
                        </div>
                    )}

                    {hasMore && (
                        <div className="mt-6 flex justify-center">
                            <Button
                                variant="outline"
                                onClick={loadMore}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <LoadingSpinner size="sm" className="mr-2" />
                                        Đang tải...
                                    </>
                                ) : (
                                    'Tải thêm kết quả'
                                )}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
