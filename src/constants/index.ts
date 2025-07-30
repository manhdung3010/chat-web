// API Constants
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    PROFILE: "/auth/profile",
  },
  USERS: {
    LIST: "/users",
    DETAIL: (id: string) => `/users/${id}`,
    CREATE: "/users",
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
  },
  PRODUCTS: {
    LIST: "/products",
    DETAIL: (id: string) => `/products/${id}`,
    CREATE: "/products",
    UPDATE: (id: string) => `/products/${id}`,
    DELETE: (id: string) => `/products/${id}`,
  },
  CATEGORIES: {
    LIST: "/categories",
    DETAIL: (id: string) => `/categories/${id}`,
    CREATE: "/categories",
    UPDATE: (id: string) => `/categories/${id}`,
    DELETE: (id: string) => `/categories/${id}`,
  },
} as const;

// App Constants
export const APP_CONFIG = {
  NAME: "Base Code",
  DESCRIPTION: "Một base code chuẩn cho dự án Next.js với TypeScript",
  VERSION: "1.0.0",
  AUTHOR: "Base Code Team",
  WEBSITE: "https://basecode.com",
  EMAIL: "contact@basecode.com",
  PHONE: "+84 123 456 789",
  ADDRESS: "Hà Nội, Việt Nam",
} as const;

// Pagination Constants
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  LIMIT_OPTIONS: [10, 20, 50, 100],
} as const;

// Validation Constants
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  EMAIL_MAX_LENGTH: 255,
  PHONE_MAX_LENGTH: 15,
  DESCRIPTION_MAX_LENGTH: 500,
} as const;

// File Upload Constants
export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ["image/jpeg", "image/png", "image/webp", "image/gif"],
  MAX_FILES: 10,
} as const;

// Date Format Constants
export const DATE_FORMATS = {
  DISPLAY: "DD/MM/YYYY",
  DISPLAY_TIME: "DD/MM/YYYY HH:mm",
  API: "YYYY-MM-DD",
  API_TIME: "YYYY-MM-DD HH:mm:ss",
  ISO: "YYYY-MM-DDTHH:mm:ss.SSSZ",
} as const;

// Currency Constants
export const CURRENCY = {
  VND: {
    code: "VND",
    symbol: "₫",
    name: "Vietnamese Dong",
  },
  USD: {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    name: "Euro",
  },
} as const;

// Status Constants
export const STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  DRAFT: "draft",
  PUBLISHED: "published",
} as const;

// Role Constants
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MODERATOR: "moderator",
} as const;

// Theme Constants
export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: "token",
  REFRESH_TOKEN: "refreshToken",
  USER: "user",
  THEME: "theme",
  LANGUAGE: "language",
  CART: "cart",
  WISHLIST: "wishlist",
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR:
    "Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.",
  UNAUTHORIZED: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.",
  FORBIDDEN: "Bạn không có quyền truy cập vào tài nguyên này.",
  NOT_FOUND: "Không tìm thấy tài nguyên yêu cầu.",
  SERVER_ERROR: "Lỗi server. Vui lòng thử lại sau.",
  VALIDATION_ERROR: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.",
  TIMEOUT_ERROR: "Yêu cầu bị timeout. Vui lòng thử lại.",
  UNKNOWN_ERROR: "Đã xảy ra lỗi không xác định.",
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  CREATED: "Tạo mới thành công.",
  UPDATED: "Cập nhật thành công.",
  DELETED: "Xóa thành công.",
  SAVED: "Lưu thành công.",
  UPLOADED: "Tải lên thành công.",
  LOGIN: "Đăng nhập thành công.",
  LOGOUT: "Đăng xuất thành công.",
  REGISTER: "Đăng ký thành công.",
} as const;
