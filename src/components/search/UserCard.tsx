import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import Avatar from '@/components/common/Avatar';

interface UserCardProps {
    user: any & { friendRequestSent?: boolean };
    onAddFriend?: (userId: string) => void;
    onStartChat?: (userId: string) => void;
}

export default function UserCard({ user, onAddFriend, onStartChat }: UserCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group rounded-lg border border-border/50 bg-card p-4 transition-all hover:border-border hover:shadow-md"
        >
            <div className="flex items-start gap-3">
                <div className="relative">
                    <Avatar name={user.username} size={48} />

                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                        {user.username}
                    </h3>
                    <p className="text-sm text-foreground/60 truncate">
                        {user.email}
                    </p>
                </div>
            </div>

            {/* <div className="mt-4 flex gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => onAddFriend(user.id)}
                    disabled={user.friendRequestSent}
                >
                    {user.friendRequestSent ? '✅ Đã gửi' : '👥 Kết bạn'}
                </Button>
                <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    onClick={() => onStartChat(user.id)}
                >
                    💬 Nhắn tin
                </Button>
            </div> */}
        </motion.div>
    );
}

