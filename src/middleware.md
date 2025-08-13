# Authentication Middleware

This document explains the authentication middleware implementation and why it's preferred over client-side route protection.

## 🎯 Why Middleware Instead of ProtectedRoute?

### ❌ Problems with Client-Side Protection (ProtectedRoute)

```typescript
// ❌ Client-side protection issues
<ProtectedRoute>
  <ChatPage />
</ProtectedRoute>
```

1. **Content Flash**: Users see protected content briefly before redirect
2. **SEO Issues**: Search engines can index protected pages
3. **Performance**: Components render before auth check
4. **Security**: Not real protection, just UI hiding
5. **UX**: Poor user experience with loading states

### ✅ Benefits of Server-Side Middleware

```typescript
// ✅ Server-side protection
export function middleware(request: NextRequest) {
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}
```

1. **No Content Flash**: Redirect happens before any content renders
2. **Better SEO**: Protected pages never reach search engines
3. **Performance**: Auth check happens before rendering
4. **Real Security**: Server-level protection
5. **Better UX**: Instant redirects, no loading states

## 🔧 How It Works

### 1. Token Storage Strategy

```typescript
// Dual storage: Zustand (client) + Cookies (server)
const setCookie = (name: string, value: string, days: number = 7) => {
  document.cookie = `${name}=${value};expires=${expires};path=/;SameSite=Strict`;
};

// In auth store
login: (user: AuthUser, tokens: AuthTokens) => {
  set({ user, tokens, isAuthenticated: true });
  setCookie("auth-token", tokens.accessToken, 7); // For middleware
};
```

### 2. Middleware Flow

```typescript
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth-token")?.value;
  const isAuthenticated = !!token;

  // Protected route logic
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Auth route logic
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/chat", request.url));
  }
}
```

### 3. Redirect Handling

```typescript
// Login page handles redirect parameter
const urlParams = new URLSearchParams(window.location.search);
const redirect = urlParams.get("redirect");

// After successful login
router.push(redirect || "/chat");
```

## 📁 File Structure

```
src/
├── middleware.ts           # Next.js middleware
├── stores/
│   └── auth.store.ts      # Zustand store with cookie sync
├── hooks/
│   └── useAuth.ts         # Auth hook with redirect handling
└── utils/
    └── auth.ts            # Client-side auth utilities
```

## 🛡️ Protected Routes

### Automatically Protected

- `/chat` - Chat application
- `/dashboard` - User dashboard
- `/profile` - User profile
- `/settings` - User settings

### Auth Routes (Redirect if Authenticated)

- `/auth/login` - Login page
- `/auth/register` - Register page

### Public Routes

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page

## 🔄 Migration from ProtectedRoute

### Before (Client-Side)

```typescript
// ❌ Old way
import ProtectedRoute from "@/components/common/ProtectedRoute";

function ChatPage() {
  return (
    <ProtectedRoute>
      <div>Chat content</div>
    </ProtectedRoute>
  );
}
```

### After (Server-Side)

```typescript
// ✅ New way - No wrapper needed!
function ChatPage() {
  return <div>Chat content</div>;
}

// Middleware automatically protects the route
```

## 🚀 Performance Benefits

1. **Faster Initial Load**: No client-side auth checks
2. **No Hydration Issues**: Server handles auth before render
3. **Better Caching**: Protected routes never cached
4. **Reduced Bundle Size**: No ProtectedRoute component needed

## 🔒 Security Benefits

1. **Server-Side Validation**: Auth checked before any content
2. **No Token Exposure**: Tokens not in client-side code
3. **Automatic Cleanup**: Cookies cleared on logout
4. **CSRF Protection**: SameSite cookie policy

## 📱 User Experience

1. **Instant Redirects**: No loading states or flashes
2. **Seamless Navigation**: Automatic redirect after login
3. **Consistent Behavior**: Same protection across all routes
4. **Better Error Handling**: Clear auth requirements
