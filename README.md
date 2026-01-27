# 🌟 Personal Portfolio Website

A modern, full-stack portfolio website showcasing skills, projects, and professional experience. Built with React, Node.js/Express, and designed with smooth animations and a beautiful dark theme.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://portfolio-ten-blond-83.vercel.app)

## 🚀 Live Demo

**Production URL**: [https://portfolio-ten-blond-83.vercel.app](https://portfolio-ten-blond-83.vercel.app)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌙 **Dark Theme** - Eye-friendly dark mode with accent colors
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎭 **Smooth Animations** - Framer Motion & AOS for engaging user experience
- 💼 **Dynamic Projects Section** - Filterable project showcase
- 🛠️ **Skills Display** - Organized skills with icons by category
- 📧 **Contact Form** - Functional contact form with MongoDB integration
- 🔄 **RESTful API** - Backend API for dynamic content

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **AOS** - Scroll animations
- **React Icons** - Icon library
- **Axios** - HTTP client
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database (optional)
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Deployment
- **Vercel** - Hosting platform
- **Serverless Functions** - API endpoints

## 📁 Project Structure

```
Portfolio/
├── api/                      # Backend API
│   ├── index.js             # Serverless API handler (Vercel)
│   ├── server.js            # Local development server
│   ├── models/              # MongoDB models
│   │   └── Contact.js
│   ├── routes/              # API routes
│   │   └── contact.js
│   ├── public/              # Static files (PDFs, etc.)
│   ├── package.json
│   └── README.md
│
├── frontend/                 # React Frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── Footer.jsx
│   │   ├── context/         # React context
│   │   │   └── ThemeContext.jsx
│   │   ├── data/            # Static data
│   │   │   ├── projects.js
│   │   │   └── skills.jsx
│   │   ├── pages/           # Page components
│   │   ├── styles/          # CSS files
│   │   │   └── global-new.css
│   │   ├── assets/          # Images, icons
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── public/              # Public assets
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
├── vercel.json              # Vercel deployment config
├── .vercelignore            # Vercel ignore file
├── .gitignore
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (optional, for contact form)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Purba234/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies for both frontend and backend**
   
   Backend:
   ```bash
   cd api
   npm install
   ```
   
   Frontend:
   ```bash
   cd frontend
   npm install
   ```

3. **Set up environment variables**
   
   Create `.env` file in the `api` directory:
   ```env
   PORT=5001
   MONGODB_URI=your_mongodb_connection_string  # Optional
   ```

4. **Start the backend server**
   ```bash
   cd api
   npm run dev
   ```
   Server will run on `http://localhost:5001`

5. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:3000`

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```
The build output will be in `frontend/dist/`

### Backend Production
The backend is configured to run as serverless functions on Vercel.

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy to preview**
   ```bash
   vercel
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

### Environment Variables on Vercel

Add these environment variables in your Vercel project settings:
- `MONGODB_URI` - MongoDB connection string (if using database)

## 🎨 Customization

### Update Personal Information

1. **Skills** - Edit `api/server.js` or `api/index.js` (line ~17)
2. **Projects** - Edit `api/server.js` or `api/index.js` (line ~29)
3. **About Section** - Edit `frontend/src/components/About.jsx`
4. **Hero Section** - Edit `frontend/src/components/Hero.jsx`
5. **Contact Info** - Edit `frontend/src/components/Footer.jsx`

### Update Styling

- **Colors & Theme** - Edit `frontend/src/styles/global-new.css` (CSS variables in `:root`)
- **Fonts** - Update in `global-new.css` or add new fonts in `index.html`

## 📡 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/skills` | GET | Get all skills organized by category |
| `/api/projects` | GET | Get all projects |
| `/api/contact` | POST | Submit contact form |
| `/api/resume` | GET | Download resume PDF |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Purba Saha**

- GitHub: [@Purba234](https://github.com/Purba234)
- Portfolio: [https://portfolio-ten-blond-83.vercel.app](https://portfolio-ten-blond-83.vercel.app)

## 🙏 Acknowledgments

- React Icons for the beautiful icon set
- Framer Motion for smooth animations
- Vercel for easy deployment
- AOS for scroll animations

---

⭐ Star this repo if you found it helpful!
