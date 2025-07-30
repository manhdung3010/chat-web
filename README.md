# Base Code - Next.js TypeScript

[![Next.js](https://img.shields.io/badge/Next.js-14.2.18-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![React Query](https://img.shields.io/badge/React_Query-4.36.1-FF4154?style=flat-square&logo=react-query)](https://tanstack.com/query)
[![Ant Design](https://img.shields.io/badge/Ant_Design-5.24.1-1890FF?style=flat-square&logo=ant-design)](https://ant.design/)

Một base code chuẩn cho dự án Next.js với TypeScript, được thiết kế để giúp bạn bắt đầu nhanh chóng với tất cả các thành phần cần thiết.

## 🚀 Tính năng chính

- **Next.js 14** với App Router
- **TypeScript** cho type safety
- **Tailwind CSS** cho styling
- **React Query (TanStack Query)** cho state management
- **Ant Design** cho UI components
- **Axios** cho HTTP requests
- **ESLint** cho code linting
- **PostCSS** cho CSS processing
- **Responsive Design** với mobile-first approach
- **SEO Optimized** với metadata
- **Error Handling** toàn diện
- **Loading States** và error boundaries

## 🛠️ Công nghệ sử dụng

### Core

- **Next.js 14.2.18** - React framework với App Router
- **React 18** - UI library
- **TypeScript 5** - Type safety

### Styling & UI

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Ant Design 5.24.1** - UI component library
- **PostCSS 8.5.3** - CSS processing

### State Management & Data Fetching

- **React Query (TanStack Query) 4.36.1** - Server state management
- **Axios 1.8.4** - HTTP client

### Development Tools

- **ESLint 8** - Code linting
- **TypeScript ESLint** - TypeScript linting rules
- **Autoprefixer 10.4.20** - CSS vendor prefixes

## 🚀 Bắt đầu

### Yêu cầu hệ thống

- Node.js 18.0.0 trở lên
- npm hoặc yarn

### Cài đặt

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd base-nextjs
   ```

2. **Cài đặt dependencies**

   ```bash
   npm install
   # hoặc
   yarn install
   ```

3. **Cấu hình environment**

   ```bash
   cp env.example .env.local
   ```

   Chỉnh sửa file `.env.local` với các giá trị phù hợp:

   ```env
   # App Configuration
   NEXT_PUBLIC_APP_NAME=Base Code
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_BASE_URL=http://localhost:3000

   # API Configuration
   NEXT_PUBLIC_BASE_API_URL=http://localhost:8000/api
   NEXT_PUBLIC_API_TIMEOUT=10000
   ```

4. **Chạy development server**

   ```bash
   npm run dev
   # hoặc
   yarn dev
   ```

5. **Mở trình duyệt**
   ```
   http://localhost:3000
   ```

## 📝 Scripts

```json
{
  "dev": "next dev",        # Development server
  "build": "next build",    # Production build
  "start": "next start",    # Production server
  "lint": "next lint"       # ESLint check
}
```

## 🎨 Styling

### Tailwind CSS Configuration

Dự án sử dụng Tailwind CSS với cấu hình tùy chỉnh:

- **Color System**: HSL color variables cho theme consistency
- **Typography**: Roboto font family
- **Animations**: Custom fade-in, slide-up, slide-down animations
- **Responsive**: Mobile-first responsive design

## 🔧 API Configuration

### Axios Client

Dự án sử dụng Axios với cấu hình toàn diện:

- **Base URL**: Configurable via environment variables
- **Interceptors**: Request/response interceptors cho authentication và error handling
- **Error Handling**: Centralized error handling với user-friendly messages
- **Timeout**: 10 seconds default timeout

## 🎯 Components

### Custom Components

Dự án bao gồm các custom components được thiết kế để tái sử dụng:

- **CustomButton**: Button component với variants và loading states
- **CustomCard**: Card component cho layout
- **CustomInput**: Input component với validation
- **CustomModal**: Modal component
- **CustomPagination**: Pagination component
- **SearchHeader**: Search component với filters

## 🔄 State Management

### React Query (TanStack Query)

Dự án sử dụng React Query cho server state management:

```typescript
import { useQuery, useMutation } from "@tanstack/react-query";

// Query data
const { data, isLoading, error } = useQuery({
  queryKey: ["products"],
  queryFn: () => fetchProducts(),
});

// Mutate data
const mutation = useMutation({
  mutationFn: createProduct,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["products"] });
  },
});
```

## 📱 Responsive Design

Dự án được thiết kế responsive với Tailwind CSS breakpoints:

- **Mobile**: `sm:` (640px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

## 🎨 Theme System

Dự án hỗ trợ theme system với CSS variables:

- **Light Theme**: Default theme
- **Dark Theme**: Có thể được implement
- **System Theme**: Tự động theo system preference

## 🔒 Type Safety

### TypeScript Configuration

- **Strict Mode**: Enabled
- **Path Mapping**: `@/*` maps to `src/*`
- **ESLint Integration**: TypeScript ESLint rules

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** automatically on push to main branch

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📚 Tài liệu tham khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📞 Liên hệ

- **Email**: ngmanhdung2003@gmail.comcom
