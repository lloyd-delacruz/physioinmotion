# Physio in Motion - Vancouver Physiotherapy Clinic Website

A modern, responsive website for Physio in Motion, a physiotherapy clinic based in Vancouver, Canada. The website provides information about services, team members, and allows patients to book appointments online.

## 🏥 About Physio in Motion

Physio in Motion is dedicated to helping patients move better and live better through personalized physiotherapy care. Founded in 2015, the clinic combines evidence-based treatment with compassionate support to achieve lasting results for patients in the Vancouver community.

## 🚀 Tech Stack

### Frontend

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **React Query** - Data fetching and state management
- **Wouter** - Lightweight routing

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **Drizzle ORM** - Type-safe database toolkit
- **Neon Database** - Serverless PostgreSQL
- **Passport.js** - Authentication middleware
- **WebSocket** - Real-time communication

### Development Tools

- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS processing
- **Drizzle Kit** - Database migrations
- **TSX** - TypeScript execution

## 📋 Features

- **Responsive Design** - Mobile-first approach with modern UI/UX
- **Service Information** - Detailed descriptions of physiotherapy services
- **Team Profiles** - Information about healthcare professionals
- **Online Booking** - Integration with Jane App for appointment scheduling
- **Contact Forms** - Patient inquiry and contact functionality
- **SEO Optimized** - Meta tags and structured data for search engines
- **Accessibility** - WCAG compliant with screen reader support
- **Performance** - Optimized loading and Core Web Vitals

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- PostgreSQL database (or Neon account)

### Local Development Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd PhysioInMotion
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:

   ```env
   # Database
   DATABASE_URL=your_postgresql_connection_string

   # Session
   SESSION_SECRET=your_session_secret_key

   # Environment
   NODE_ENV=development
   ```

4. **Database Setup**

   ```bash
   # Push database schema
   npm run db:push
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
PhysioInMotion/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and configurations
│   │   ├── App.tsx        # Main application component
│   │   └── main.tsx       # Application entry point
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Database configuration
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and utilities
├── dist/                 # Production build output
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── drizzle.config.ts     # Database configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type checking
- `npm run db:push` - Push database schema changes

## 🎨 Design System

The website uses a consistent design system with:

- **Color Palette**: Blue primary (#2563eb), neutral grays, white backgrounds
- **Typography**: System fonts with clear hierarchy
- **Components**: Radix UI primitives with custom styling
- **Spacing**: Tailwind's spacing scale (4px base unit)
- **Breakpoints**: Mobile-first responsive design

## 📱 Pages & Features

### Main Pages

- **Home** - Hero section, services preview, team preview
- **About** - Mission, philosophy, story, community commitment
- **Services** - Detailed service offerings with descriptions
- **Team** - Healthcare professional profiles
- **Contact** - Contact information and inquiry forms

### Key Components

- **Header** - Navigation with mobile menu
- **Footer** - Contact info and links
- **Service Cards** - Interactive service displays
- **Team Cards** - Professional profile cards
- **Contact Forms** - Patient inquiry handling

## 🔒 Security Features

- Session-based authentication
- CSRF protection
- Input validation with Zod
- Secure headers configuration
- Environment variable protection

## 📊 Performance Optimizations

- Code splitting with dynamic imports
- Image optimization and lazy loading
- CSS purging in production
- Bundle size optimization
- Caching strategies

## 🚀 Deployment

### Production Build

```bash
npm run build
```

### Vercel Deployment

The project is configured for Vercel deployment with:

- `vercel.json` configuration
- Automatic builds on push
- Environment variable management

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Configure environment variables
4. Set up database connection

## 🧪 Testing

The project structure supports testing with:

- Unit tests for components
- Integration tests for API endpoints
- E2E tests for user workflows

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support & Contact

For technical support or questions about the website:

- Email: info@physioinmotion.ca
- Phone: (604) XXX-XXXX
- Address: Vancouver, BC, Canada

## 📄 License

This project is proprietary software owned by Physio in Motion. All rights reserved.

---

**Built with ❤️ for better movement and healthier lives in Vancouver**
