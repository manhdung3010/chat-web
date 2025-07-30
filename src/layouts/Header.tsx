"use client";
import Menu from "@/modules/Header/Menu";
import CustomButton from "@/components/CustomButton";
import { HandbagIcon } from "@/Icons/HandbagIcon";

import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white hidden md:block">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">📞</span>
                <span>(+84) 123456789</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">✉️</span>
                <span>info@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">🕒</span>
                <span>8:00 - 17:00 (Thứ Hai - Thứ Bảy)</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <span className="text-lg">📘</span>
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <span className="text-lg">📷</span>
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <span className="text-lg">🐦</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-lg border-b border-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    BASE CODE
                  </h1>
                  <p className="text-xs text-gray-500">Next.js TypeScript</p>
                </div>
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:block flex-1 max-w-2xl mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <button className="absolute inset-y-0 right-0 px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                  Tìm
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              {/* Hotline - Desktop */}
              <div className="hidden md:flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">📞</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Hotline 24/7</p>
                  <Link
                    href="tel:123456789"
                    className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    123456789
                  </Link>
                </div>
              </div>

              {/* Cart */}
              <div className="relative">
                <CustomButton className="relative p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <HandbagIcon />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </CustomButton>
              </div>

              {/* User Menu */}
              <div className="hidden md:block">
                <CustomButton className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                  <span className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">👤</span>
                  </span>
                  <span className="text-sm font-medium">Đăng nhập</span>
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto py-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">🔍</span>
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <Menu />
    </>
  );
}
