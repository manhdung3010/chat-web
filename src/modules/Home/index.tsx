"use client";

import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import CustomCard from "@/components/CustomCard";

export default function HomePage() {
  const features = [
    {
      title: "Tính năng 1",
      description: "Mô tả chi tiết về tính năng đầu tiên của ứng dụng",
      icon: "🚀",
    },
    {
      title: "Tính năng 2",
      description: "Mô tả chi tiết về tính năng thứ hai của ứng dụng",
      icon: "⚡",
    },
    {
      title: "Tính năng 3",
      description: "Mô tả chi tiết về tính năng thứ ba của ứng dụng",
      icon: "🎯",
    },
    {
      title: "Tính năng 4",
      description: "Mô tả chi tiết về tính năng thứ tư của ứng dụng",
      icon: "💡",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">BASE CODE</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Một base code chuẩn cho dự án Next.js với TypeScript và Tailwind CSS
          </p>
          <div className="flex gap-4 justify-center">
            <CustomButton className="bg-white text-blue-600 hover:bg-gray-100">
              Bắt đầu
            </CustomButton>
            <CustomButton className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
              Tìm hiểu thêm
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tính năng chính
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <CustomCard key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Về dự án</h2>
              <p className="text-gray-600 mb-4">
                Đây là một base code được thiết kế để giúp bạn bắt đầu nhanh
                chóng với dự án Next.js. Base code này bao gồm tất cả các thành
                phần cần thiết như header, footer, navigation và các component
                cơ bản.
              </p>
              <p className="text-gray-600 mb-6">
                Sử dụng TypeScript để đảm bảo type safety và Tailwind CSS cho
                styling. Base code này có thể được tùy chỉnh dễ dàng cho bất kỳ
                dự án nào.
              </p>
              <CustomButton className="bg-blue-600 text-white hover:bg-blue-700">
                Xem tài liệu
              </CustomButton>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Hình ảnh demo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Liên hệ</h2>
          <p className="text-xl mb-8">Có câu hỏi? Hãy liên hệ với chúng tôi</p>
          <div className="max-w-md mx-auto">
            <CustomButton className="bg-white text-blue-600 hover:bg-gray-100 w-full">
              Liên hệ ngay
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
}
