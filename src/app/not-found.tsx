"use client";

import Button from "@/components/common/Button";



export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full bg-card border border-border rounded-lg shadow-sm p-8 text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-foreground/40 mb-2">404</h1>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Trang không tồn tại
          </h2>
          <p className="text-foreground/70 mb-6">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => window.history.back()}
            className="w-full"
          >
            Quay lại
          </Button>

          <Button
            onClick={() => (window.location.href = "/")}
            variant="secondary"
            className="w-full"
          >
            Về trang chủ
          </Button>
        </div>
      </div>
    </div>
  );
}
