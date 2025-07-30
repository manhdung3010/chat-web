"use client";

import CustomButton from "@/components/CustomButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-red-600 mb-2">Oops!</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Đã xảy ra lỗi
          </h2>
          <p className="text-gray-600 mb-6">
            {error.message || "Có lỗi xảy ra, vui lòng thử lại sau."}
          </p>
        </div>

        <div className="space-y-3">
          <CustomButton onClick={reset} className="primary w-full">
            Thử lại
          </CustomButton>

          <CustomButton
            onClick={() => (window.location.href = "/")}
            className="gray w-full"
          >
            Về trang chủ
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
