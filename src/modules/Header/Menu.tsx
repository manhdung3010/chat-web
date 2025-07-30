"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomButton from "@/components/CustomButton";
import { MenuIcon } from "@/Icons/MenuIcon";

const menuItems = [
  { name: "Trang chủ", href: "/" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Giới thiệu", href: "/about" },
  { name: "Liên hệ", href: "/contact" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <CustomButton onClick={toggleMenu} className="bg-white shadow-lg">
          <MenuIcon />
        </CustomButton>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu} />
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-primary">Menu</h2>
            <CustomButton onClick={toggleMenu} className="text-gray-500">
              ✕
            </CustomButton>
          </div>
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  pathname === item.href
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block bg-white border-b border-gray-200">
        <div className="container mx-auto">
          <ul className="flex space-x-8 py-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`py-2 px-3 rounded-md transition-colors font-medium ${
                    pathname === item.href
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
