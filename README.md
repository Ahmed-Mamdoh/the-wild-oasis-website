# 🏔️ The Wild Oasis - Next.js & Auth.js Implementation

**The Wild Oasis** demonstrates advanced Next.js and Auth.js integration, developed as part of [Jonas Schmedtmann's "The Ultimate React Course 2025"](https://www.udemy.com/course/the-ultimate-react-course/). This project showcases production-ready authentication flows and modern React architecture.

🌐 **[Live Demo](https://the-wild-oasis-website-demo-drab.vercel.app/)**

## 🔐 Authentication Features
Secure user authentication with Google OAuth, protected routes, session management, and user profile handling. Users can sign in, manage bookings, and access personalized dashboards with persistent sessions.

## ⚡ Next.js Core Implementation

### 🏗️ App Router Architecture
- **File-based routing** with dynamic segments for cabins `[cabinId]` and reservations `[id]`
- **Nested layouts** for account section with shared navigation and auth checks
- **Loading states** using React Suspense boundaries for optimal UX
- **Error boundaries** with custom error pages and graceful fallbacks

## 🛡️ Auth.js Integration

### 🔑 Session Management
- **Automatic token refresh** with secure cookie handling
- **User profile integration** linking auth providers to database records
- **Role-based access** with guest/user permissions
- **Sign-out functionality** with proper session cleanup

## 🛠️ Technology Stack
- **Next.js 16**: App Router, Server Components, Server Actions
- **Auth.js 5**: OAuth providers, session management, middleware
- **Supabase**: PostgreSQL database supporting user data
- **React 18**: Concurrent features, Suspense, Context API

## 🎯 Key Achievements
- ✅ **Server-side authentication** with secure session handling
- ✅ **Protected API routes** with proper authorization checks  
- ✅ **OAuth integration** supporting multiple providers
- ✅ **Performance optimization** with streaming 
- ✅ **Error handling** with user-friendly auth flows

## 📸 Screenshots
*Screenshots will be added here*

**🎓 Educational Project** - [Jonas Schmedtmann's Ultimate React Course 2025](https://www.udemy.com/course/the-ultimate-react-course/)