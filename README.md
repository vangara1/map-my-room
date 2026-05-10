# 🏨 Map My Room - Premium Hotel Management SaaS

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-blue?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-10-orange?style=flat-square&logo=firebase)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

A production-ready SaaS platform for budget hotel management and optimization. Built with Next.js 15, Firebase, Tailwind CSS, and Framer Motion.

**Live:** [https://mapmyroom.com](https://mapmyroom.com)

---

## ✨ Features

### 🏨 Hotel Management
- **Smart Room Management** - Visualize and manage all rooms with interactive floor plans
- **Real-Time Occupancy** - Track occupancy rates and availability instantly
- **Revenue Analytics** - Deep insights into revenue streams and pricing optimization
- **Guest Management** - Centralized guest profiles and communication
- **Booking Integration** - Sync bookings from major OTAs automatically
- **Staff Coordination** - Manage housekeeping, front desk, and maintenance teams

### 🔐 Authentication & Security
- Google OAuth 2.0 authentication
- Firebase Authentication
- Protected dashboard routes
- Session persistence
- Enterprise-grade encryption
- ISO 27001 ready

### 📊 Analytics & Reporting
- Real-time occupancy charts
- Revenue vs target tracking
- Guest insights and trends
- Automated reporting
- Custom dashboards

### 🎨 User Interface
- Glassmorphism design
- Gold accent theme
- Smooth animations with Framer Motion
- Fully responsive (mobile-first)
- Dark premium aesthetic
- Accessibility compliant

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase account
- Google Cloud Console access

### Installation

```bash
# Clone repository
git clone https://github.com/vangara1/map-my-room.git
cd map-my-room

# Install dependencies
npm install

# Create .env.local
cp .env.example .env.local

# Add Firebase credentials to .env.local
# NEXT_PUBLIC_FIREBASE_API_KEY=xxx
# NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
# etc...

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Build for Production

```bash
# Build
npm run build

# Start
npm start

# Run production server at http://localhost:3000
```

---

## 📦 Project Structure

```
map-my-room/
├── app/                 # Next.js app router
│   ├── (auth)/         # Authentication routes
│   ├── (marketing)/    # Marketing pages
│   ├── (dashboard)/    # Protected dashboard routes
│   └── layout.tsx      # Root layout
├── components/          # Reusable React components
│   ├── auth/           # Authentication components
│   ├── landing/        # Landing page sections
│   ├── dashboard/      # Dashboard components
│   └── common/         # Common UI components
├── lib/                # Utilities and libraries
│   ├── firebase.ts     # Firebase configuration
│   ├── auth.ts         # Auth utilities
│   ├── utils.ts        # Helper functions
│   └── constants.ts    # App constants
├── hooks/              # Custom React hooks
├── providers/          # Context providers
├── types/              # TypeScript type definitions
├── styles/             # Global styles
├── public/             # Static assets
├── middleware.ts       # Next.js middleware
└── package.json        # Dependencies
```

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` with Firebase credentials:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Firebase Setup

1. Create Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Google Authentication
3. Create Firestore database
4. Update security rules (see `HOSTINGER_DEPLOYMENT.md`)
5. Copy credentials to `.env.local`

### Google OAuth

1. Create OAuth credentials at [console.cloud.google.com](https://console.cloud.google.com)
2. Add authorized origins and redirect URIs
3. Link to Firebase project
4. Add authorized domains to Firebase

---

## 📚 Pages

### Public Pages
- `/` - Landing page with hero, features, pricing, FAQ
- `/features` - Detailed features page
- `/pricing` - Pricing plans
- `/about` - About page
- `/contact` - Contact form
- `/privacy-policy` - Privacy policy
- `/terms` - Terms & conditions
- `/404` - 404 error page

### Authentication
- `/login` - Google Sign-In page
- Protected routes redirect to login

### Dashboard (Protected)
- `/dashboard` - Main dashboard with analytics
- `/rooms` - Room management
- `/bookings` - Booking management
- `/guests` - Guest profiles
- `/staff` - Staff management
- `/housekeeping` - Housekeeping tasks
- `/expenses` - Expense tracking
- `/reports` - Reporting and analytics
- `/settings` - User settings

---

## 🎨 Design System

### Color Palette
- **Primary:** Gold (#f5c842)
- **Dark:** #030712 - #111827
- **Accents:** Green, Red, Blue, Yellow

### Typography
- **Font:** Inter
- **Weights:** 400, 500, 600, 700

### Components
- **Button** - Primary, Secondary, Outline, Ghost variants
- **Card** - Glass effect with backdrop blur
- **Input** - Text, Email, etc.
- **Analytics Card** - Stats with trend indicators
- **Charts** - Occupancy, Revenue (Recharts)

---

## 🚀 Deployment

### Hostinger

Complete deployment guide: See `HOSTINGER_DEPLOYMENT.md`

**Quick Steps:**
1. Connect GitHub to Hostinger
2. Add Firebase environment variables
3. Configure build settings
4. Enable SSL certificate
5. Deploy!

### Vercel (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
# Deploy again
vercel
```

---

## 📊 Performance

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Optimizations
- ✅ Code splitting and lazy loading
- ✅ Image optimization with Next.js Image
- ✅ Dynamic imports for large components
- ✅ Gzip compression
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ Caching strategies

---

## 🔐 Security

- ✅ HTTPS/SSL
- ✅ Firebase security rules
- ✅ CORS configuration
- ✅ XSS protection
- ✅ CSRF tokens
- ✅ Rate limiting
- ✅ DDoS protection
- ✅ WAF enabled

---

## 📱 Responsive Design

- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

---

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Build check
npm run build
```

---

## 📦 Dependencies

### Core
- **next** - React framework
- **react** - UI library
- **typescript** - Type safety

### UI & Styling
- **tailwindcss** - Utility-first CSS
- **framer-motion** - Animation library
- **lucide-react** - Icon library
- **recharts** - Chart library

### Backend & Auth
- **firebase** - Backend as a service
- **@radix-ui** - Headless UI components

### Utilities
- **clsx** - Class name utilities
- **axios** - HTTP client

---

## 🛠️ Development

### File Naming
- Components: `PascalCase.tsx`
- Files: `kebab-case.ts`
- Folders: `kebab-case/`
- Types: `PascalCase.ts`

### Code Style
- ESLint configured
- TypeScript strict mode
- Prettier formatting

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "Add feature"

# Push and create PR
git push origin feature/feature-name
```

---

## 📞 Support

- 📧 Email: support@mapmyroom.com
- 🐛 Issues: [GitHub Issues](https://github.com/vangara1/map-my-room/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/vangara1/map-my-room/discussions)

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🙏 Credits

Built with ❤️ for hotel owners and managers.

Inspired by Stripe, Linear, and Airbnb design systems.

---

## 🎯 Roadmap

- [x] Core authentication
- [x] Dashboard layout
- [x] Analytics cards
- [ ] Advanced room management
- [ ] OTA integrations
- [ ] Mobile app
- [ ] AI-powered recommendations
- [ ] Custom pricing engine
- [ ] Team collaboration features
- [ ] Advanced reporting

---

**Built with Next.js 15, Firebase, and Tailwind CSS** 🚀

**Status:** Production Ready ✅

**Last Updated:** May 10, 2026
