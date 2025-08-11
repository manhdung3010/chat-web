"use client";

import Button from "@/components/common/Button";



export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full bg-card border border-border rounded-lg shadow-sm p-8 text-center">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-red-500 mb-2">Oops!</h1>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Đã xảy ra lỗi
          </h2>
          <p className="text-foreground/70 mb-6">
            {error.message || "Có lỗi xảy ra, vui lòng thử lại sau."}
          </p>
        </div>

        <div className="space-y-3">
          <Button onClick={reset} className="w-full">
            Thử lại
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
