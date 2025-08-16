# RentPg - PG Accommodation Booking Platform

A modern, responsive web application for finding and booking Paying Guest (PG) accommodations. Built with React and Tailwind CSS, featuring AI-powered recommendations, comprehensive booking management, and user dashboards for both tenants and property owners.

![RentPg Banner](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

### For Tenants
- **Smart Property Search**: Advanced filtering by location, price, amenities, and preferences
- **AI-Powered Recommendations**: Personalized PG suggestions based on user preferences
- **Detailed Property Listings**: Comprehensive information with photos, amenities, and reviews
- **Easy Booking System**: Streamlined booking process with instant confirmation
- **User Dashboard**: Manage bookings, view history, and track payments
- **Real-time Messaging**: Direct communication with property owners

### For Property Owners
- **Property Management**: List and manage multiple PG properties
- **Owner Dashboard**: Track bookings, manage availability, and view analytics
- **Booking Management**: Handle reservations, cancellations, and payments
- **Property Analytics**: Insights into property performance and occupancy rates

### General Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Search & Filter**: Advanced search functionality with multiple filters
- **Testimonials**: User reviews and ratings system
- **Contact Support**: Integrated contact forms and support system

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: Tailwind CSS 3.3.0
- **UI Components**: Custom component library with shadcn/ui inspiration
- **Routing**: React Router (implied from project structure)
- **State Management**: React Hooks and Context API
- **Icons**: Lucide React
- **Animations**: Framer Motion (implied from modern UI)
- **Development**: ESLint, PostCSS

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/VishalT678/RentPg.git
   cd RentPg
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
RentPg/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI components (buttons, inputs, etc.)
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── PropertyCard.jsx
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Index.jsx      # Home page
│   │   ├── Login.jsx      # Authentication
│   │   ├── PropertyDetail.jsx
│   │   ├── TenantDashboard.jsx
│   │   ├── OwnerDashboard.jsx
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API services
│   ├── lib/               # Utility functions
│   ├── assets/            # Images and other assets
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── package.json
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md
```

## 🎯 Key Components

### Core Features
- **AIRecommendations**: Smart property suggestions
- **FeaturedProperties**: Highlighted property listings
- **FilterBar**: Advanced search and filtering
- **PropertyCard**: Individual property display
- **Booking System**: Complete booking workflow
- **User Dashboards**: Separate interfaces for tenants and owners

### UI Components
- **Responsive Navigation**: Mobile-friendly navigation bar
- **Hero Section**: Engaging landing page introduction
- **Testimonials**: User reviews and feedback
- **Footer**: Contact information and links

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify dashboard
3. Configure custom domain if needed

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vishal T678**
- GitHub: [@VishalT678](https://github.com/VishalT678)
- Project Link: [https://github.com/VishalT678/RentPg](https://github.com/VishalT678/RentPg)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component inspiration
- [Lucide React](https://lucide.dev/) - Icons

## 📞 Support

If you have any questions or need support:

- Create an [Issue](https://github.com/VishalT678/RentPg/issues)
- Contact: [Your Email]
- Project Link: [https://github.com/VishalT678/RentPg](https://github.com/VishalT678/RentPg)

---

⭐ **Star this repository if you found it helpful!**
