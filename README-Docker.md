# Docker Setup cho dự án Next.js

Dự án này đã được cấu hình để chạy với Docker. Có hai môi trường chính:

## 🚀 Production Environment

### Build và chạy với Docker Compose (Khuyến nghị)

```bash
# Build và chạy ứng dụng
docker-compose up --build

# Chạy ở background
docker-compose up -d --build

# Dừng ứng dụng
docker-compose down
```

### Build và chạy với Docker trực tiếp

```bash
# Build image
docker build -t basecode-nextjs .

# Chạy container
docker run -p 3000:3000 basecode-nextjs

# Chạy ở background
docker run -d -p 3000:3000 --name basecode-app basecode-nextjs
```

## 🛠️ Development Environment

### Chạy với Docker Compose (Development)

```bash
# Build và chạy với hot reload
docker-compose -f docker-compose.dev.yml up --build

# Chạy ở background
docker-compose -f docker-compose.dev.yml up -d --build

# Dừng ứng dụng
docker-compose -f docker-compose.dev.yml down
```

### Chạy với Docker trực tiếp (Development)

```bash
# Build development image
docker build -f Dockerfile.dev -t basecode-nextjs-dev .

# Chạy container với volume mount
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules -v /app/.next basecode-nextjs-dev
```

## 📋 Các lệnh Docker hữu ích

```bash
# Xem logs
docker-compose logs -f app

# Vào container
docker-compose exec app sh

# Xem status
docker-compose ps

# Rebuild image
docker-compose build --no-cache

# Xóa tất cả containers và images
docker system prune -a
```

## 🔧 Cấu hình

### Environment Variables

Bạn có thể tạo file `.env` để cấu hình các biến môi trường:

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
# Thêm các biến môi trường khác tại đây
```

### Ports

- **Production**: http://localhost:3000
- **Development**: http://localhost:3000 (với hot reload)

## 🐛 Troubleshooting

### Lỗi permission

```bash
# Nếu gặp lỗi permission trên Linux/Mac
sudo docker-compose up --build
```

### Lỗi port đã được sử dụng

```bash
# Kiểm tra port đang sử dụng
lsof -i :3000

# Hoặc thay đổi port trong docker-compose.yml
ports:
  - "3001:3000"
```

### Lỗi build

```bash
# Xóa cache và rebuild
docker-compose build --no-cache
docker system prune -a
```

## 📁 File Structure

```
├── Dockerfile              # Production Docker image
├── Dockerfile.dev          # Development Docker image
├── docker-compose.yml      # Production compose
├── docker-compose.dev.yml  # Development compose
├── .dockerignore           # Files to exclude from build
└── README-Docker.md        # This file
```

## 🚀 Deployment

### Với Docker Hub

```bash
# Tag image
docker tag basecode-nextjs your-username/basecode-nextjs:latest

# Push to Docker Hub
docker push your-username/basecode-nextjs:latest
```

### Với Cloud Platforms

Dự án này tương thích với:

- Vercel
- Netlify
- AWS ECS
- Google Cloud Run
- Azure Container Instances

## 📝 Notes

- Production build sử dụng multi-stage build để tối ưu kích thước image
- Development environment hỗ trợ hot reload
- Health check được cấu hình cho production
- Telemetry của Next.js đã được tắt
