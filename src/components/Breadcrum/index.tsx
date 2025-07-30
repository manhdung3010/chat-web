"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const breadcrumbNameMap: Record<string, string> = {
  "": "Trang chủ",
  "tin-tuc": "Tin tức",
  "san-pham": "Sản phẩm",
};

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathSnippets = pathname.split("/").filter((i) => i);

  const breadcrumbs = pathSnippets.map((_, index) => {
    const url = "/" + pathSnippets.slice(0, index + 1).join("/");
    const isLast = index === pathSnippets.length - 1;

    const label =
      breadcrumbNameMap[pathSnippets[index]] ||
      decodeURIComponent(pathSnippets[index]);

    return isLast ? (
      <span key={url} className="text-primary">
        {label}
      </span>
    ) : (
      <span key={url}>
        <Link href={url} className="hover:underline">
          {label}
        </Link>
        <span className="mx-2">/</span>
      </span>
    );
  });

  return (
    <nav className="flex items-center text-sm py-4">
      <Link href="/" className="hover:underline">
        Trang chủ
      </Link>
      {pathSnippets.length > 0 && <span className="mx-2">/</span>}
      {breadcrumbs}
    </nav>
  );
};

export default Breadcrumbs;
