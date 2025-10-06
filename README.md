# Personal Portfolio Web Application

A modern, responsive personal portfolio built with React/Next.js frontend and Node.js/Express backend. This application allows you to showcase your projects, upload demo videos, and manage your portfolio content manually.

## 🚀 Features

### Frontend (Next.js + React + Tailwind CSS)
- **Home Page**: Personal introduction with navigation to projects
- **Projects Page**: Grid layout showcasing projects with video demos
- **About Page**: Biography, skills, experience, and contact information
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean design with hover effects and smooth animations
- **Project Management**: Add, edit, and delete projects with video uploads

### Backend (Node.js + Express)
- **File Upload**: Support for video file uploads (up to 50MB)
- **Project Management**: CRUD operations for projects
- **Video Serving**: Stream uploaded videos
- **CORS Enabled**: Easy frontend-backend communication
- **Data Storage**: JSON file-based storage (no database required)

## 📁 Project Structure

```
portfolio-app/
├── frontend/                 # Next.js React application
│   ├── components/          # Reusable React components
│   │   ├── Layout.tsx       # Main layout with navigation
│   │   ├── ProjectCard.tsx  # Individual project display
│   │   └── ProjectForm.tsx  # Add/Edit project form
│   ├── pages/               # Next.js pages
│   │   ├── _app.tsx         # App wrapper
│   │   ├── index.tsx        # Home page
│   │   ├── projects.tsx     # Projects page
│   │   └── about.tsx        # About page
│   ├── styles/              # Global styles
│   │   └── globals.css      # Tailwind CSS styles
│   ├── package.json         # Frontend dependencies
│   ├── next.config.js       # Next.js configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── postcss.config.js    # PostCSS configuration
├── backend/                 # Node.js Express server
│   ├── data/               # Data storage
│   │   └── projects.json   # Projects data file
│   ├── uploads/            # File uploads directory
│   │   └── videos/         # Video files storage
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies
└── README.md               # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd portfolio-app
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm run dev
# or
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup
```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🎯 Usage

### Adding Your Personal Information

#### 1. Update Home Page (`frontend/pages/index.tsx`)
```typescript
// Replace "Your Name" with your actual name
<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
  Hi, I'm{' '}
  <span className="text-primary-600">Your Name</span>
</h1>

// Update your introduction
<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
  Full-Stack Developer passionate about creating beautiful, functional, and user-friendly applications.
</p>

// Update social links
<a href="https://github.com/yourusername" ...>
<a href="https://linkedin.com/in/yourusername" ...>
```

#### 2. Update About Page (`frontend/pages/about.tsx`)
```typescript
// Update contact information
<div className="flex items-center space-x-3">
  <Mail className="text-primary-600" size={20} />
  <span className="text-gray-600">your.email@example.com</span>
</div>

// Update your bio
<p>
  My journey into web development began during my computer science studies...
</p>

// Update skills and technologies
const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'] },
];
```

#### 3. Update Navigation (`frontend/components/Layout.tsx`)
```typescript
// Update social links in navigation
<a href="https://github.com/yourusername" ...>
<a href="https://linkedin.com/in/yourusername" ...>
```

### Managing Projects

#### Adding Projects via UI
1. Navigate to the Projects page (`http://localhost:3000/projects`)
2. Click "Add Project" button
3. Fill in the project details:
   - Project Title
   - Description
   - Technologies used
   - GitHub repository URL
   - Live demo URL (optional)
   - Upload a demo video (optional)
4. Click "Add Project" to save

#### Manual Project Management
You can also manually edit the `backend/data/projects.json` file:

```json
[
  {
    "id": "unique-id",
    "title": "Project Name",
    "description": "Project description",
    "technologies": ["React", "Node.js", "MongoDB"],
    "githubLink": "https://github.com/username/repo",
    "liveDemoLink": "https://yourproject.com",
    "videoFilename": "video-filename.mp4",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### Video Upload
- Supported formats: MP4, MOV, AVI
- Maximum file size: 50MB
- Videos are stored in `backend/uploads/videos/`
- Videos are served at `http://localhost:5000/videos/:filename`

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. You can customize:

1. **Colors**: Update `frontend/tailwind.config.js`
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6', // Main primary color
        600: '#2563eb', // Hover state
        // ... other shades
      },
    },
  },
}
```

2. **Global Styles**: Edit `frontend/styles/globals.css`
```css
.btn-primary {
  @apply bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200;
}
```

### Animations
The app uses Framer Motion for animations. You can customize animations in any component:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Your content */}
</motion.div>
```

## 🔧 API Endpoints

### Backend API (`http://localhost:5000`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects` | Get all projects |
| POST | `/projects` | Add new project |
| PUT | `/projects/:id` | Update project |
| DELETE | `/projects/:id` | Delete project |
| POST | `/upload` | Upload video file |
| GET | `/videos/:filename` | Serve video file |
| GET | `/health` | Health check |

### Example API Usage

#### Add a new project:
```javascript
const response = await fetch('http://localhost:5000/projects', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'My Project',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    githubLink: 'https://github.com/username/repo',
    liveDemoLink: 'https://myproject.com'
  })
});
```

#### Upload a video:
```javascript
const formData = new FormData();
formData.append('video', videoFile);

const response = await fetch('http://localhost:5000/upload', {
  method: 'POST',
  body: formData
});
```

## 🚀 Deployment

### Frontend Deployment (Vercel)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set build command: `npm run build`
4. Set output directory: `.next`
5. Deploy!

### Backend Deployment (Heroku/Railway/DigitalOcean)
1. Add a `Procfile` to the backend directory:
```
web: node server.js
```
2. Set environment variables if needed
3. Deploy to your preferred platform

### Environment Variables
Create a `.env` file in the backend directory:
```
PORT=5000
NODE_ENV=production
```

## 🐛 Troubleshooting

### Common Issues

1. **Backend not starting**
   - Check if port 5000 is available
   - Ensure all dependencies are installed: `npm install`

2. **Frontend not connecting to backend**
   - Verify backend is running on port 5000
   - Check CORS settings in `backend/server.js`

3. **Video upload failing**
   - Check file size (max 50MB)
   - Verify file format (MP4, MOV, AVI)
   - Ensure `uploads/videos` directory exists

4. **Projects not loading**
   - Check if `backend/data/projects.json` exists
   - Verify JSON format is valid

### Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload during development
2. **File Watching**: Backend uses nodemon for automatic restarts
3. **Error Handling**: Check browser console and terminal for error messages

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Support

If you have any questions or need help with the setup, please:
1. Check the troubleshooting section above
2. Open an issue on GitHub
3. Contact: your.email@example.com

---

**Happy coding! 🎉**

