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
<img width="1920" height="877" alt="ScreenShot Tool -20260329171448" src="https://github.com/user-attachments/assets/3fc24d95-1f78-4c25-9cc6-13531dfc7d62" />
<img width="1920" height="877" alt="ScreenShot Tool -20260329171508" src="https://github.com/user-attachments/assets/cae5150b-2bf3-42f6-a3d8-5ebcb5f3fb79" />
<img width="1920" height="877" alt="ScreenShot Tool -20260329171525" src="https://github.com/user-attachments/assets/2f567739-c667-464e-96b7-d0ed8b987394" />
<img width="1920" height="877" alt="ScreenShot Tool -20260329171602" src="https://github.com/user-attachments/assets/cd5de8bb-6107-455f-873b-3dc665574579" />


**🎓 Educational Project** - [Jonas Schmedtmann's Ultimate React Course 2025](https://www.udemy.com/course/the-ultimate-react-course/)
