"use client";

import CustomButton from "@/components/CustomButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-gray-400 mb-2">404</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Trang không tồn tại
          </h2>
          <p className="text-gray-600 mb-6">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </p>
        </div>

        <div className="space-y-3">
          <CustomButton
            onClick={() => window.history.back()}
            className="primary w-full"
          >
            Quay lại
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
