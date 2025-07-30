"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "@/Icons/SearchIcon";
import CustomButton from "@/components/CustomButton";

export default function SearchProduct() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/sann-pham?s=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Bạn cần tìm gì?..."
        className="border-[1px] border-primary px-3 py-2 outline-none flex-1"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <CustomButton
        className="primary h-full border-none"
        onClick={handleSearch}
      >
        <SearchIcon />
      </CustomButton>
    </div>
  );
}
