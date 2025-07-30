"use client";

import React from "react";
import { Pagination } from "antd";

interface CustomPaginationProps {
  current: number;
  total: number;
  pageSize: number;
  onChange: (page: number, pageSize: number) => void;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: (total: number, range: [number, number]) => string;
  className?: string;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  current,
  total,
  pageSize,
  onChange,
  showSizeChanger = false,
  showQuickJumper = false,
  showTotal,
  className = "",
}) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Pagination
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        showSizeChanger={showSizeChanger}
        showQuickJumper={showQuickJumper}
        showTotal={showTotal}
        className="flex items-center gap-2"
        itemRender={(page, type, originalElement) => {
          if (type === "page") {
            return (
              <button className="min-w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:border-blue-500 hover:text-blue-500">
                {page}
              </button>
            );
          }
          return originalElement;
        }}
      />
    </div>
  );
};

export default CustomPagination;
