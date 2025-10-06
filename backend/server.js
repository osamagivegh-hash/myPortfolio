const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

// Ensure directories exist
const uploadsDir = path.join(__dirname, 'uploads', 'videos');
const dataDir = path.join(__dirname, 'data');
const projectsFile = path.join(dataDir, 'projects.json');

fs.ensureDirSync(uploadsDir);
fs.ensureDirSync(dataDir);

// Initialize projects.json if it doesn't exist
if (!fs.existsSync(projectsFile)) {
  fs.writeJsonSync(projectsFile, []);
}

// Configure multer for video uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // Generate unique filename with timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept video files
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed!'), false);
    }
  }
});

// Routes

// Upload video endpoint
app.post('/upload', upload.single('video'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No video file uploaded' });
    }

    res.json({
      message: 'Video uploaded successfully',
      filename: req.file.filename,
      originalName: req.file.originalname
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
});

// Get all projects
app.get('/projects', (req, res) => {
  try {
    const projects = fs.readJsonSync(projectsFile);
    res.json(projects);
  } catch (error) {
    console.error('Error reading projects:', error);
    res.status(500).json({ error: 'Failed to read projects' });
  }
});

// Add new project
app.post('/projects', (req, res) => {
  try {
    const projects = fs.readJsonSync(projectsFile);
    const newProject = {
      id: Date.now().toString(), // Simple ID generation
      ...req.body,
      createdAt: new Date().toISOString()
    };
    
    projects.push(newProject);
    fs.writeJsonSync(projectsFile, projects, { spaces: 2 });
    
    res.json({ message: 'Project added successfully', project: newProject });
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).json({ error: 'Failed to add project' });
  }
});

// Update project
app.put('/projects/:id', (req, res) => {
  try {
    const projects = fs.readJsonSync(projectsFile);
    const projectId = req.params.id;
    const projectIndex = projects.findIndex(p => p.id === projectId);
    
    if (projectIndex === -1) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    projects[projectIndex] = {
      ...projects[projectIndex],
      ...req.body,
      updatedAt: new Date().toISOString()
    };
    
    fs.writeJsonSync(projectsFile, projects, { spaces: 2 });
    res.json({ message: 'Project updated successfully', project: projects[projectIndex] });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ error: 'Failed to update project' });
  }
});

// Delete project
app.delete('/projects/:id', (req, res) => {
  try {
    const projects = fs.readJsonSync(projectsFile);
    const projectId = req.params.id;
    const projectIndex = projects.findIndex(p => p.id === projectId);
    
    if (projectIndex === -1) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    // Remove associated video file if exists
    const project = projects[projectIndex];
    if (project.videoFilename) {
      const videoPath = path.join(uploadsDir, project.videoFilename);
      if (fs.existsSync(videoPath)) {
        fs.removeSync(videoPath);
      }
    }
    
    projects.splice(projectIndex, 1);
    fs.writeJsonSync(projectsFile, projects, { spaces: 2 });
    
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

// Serve video files
app.get('/videos/:filename', (req, res) => {
  const filename = req.params.filename;
  const videoPath = path.join(uploadsDir, filename);
  
  if (fs.existsSync(videoPath)) {
    res.sendFile(videoPath);
  } else {
    res.status(404).json({ error: 'Video not found' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio backend is running' });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large. Maximum size is 50MB.' });
    }
  }
  res.status(500).json({ error: error.message });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📁 Uploads directory: ${uploadsDir}`);
  console.log(`📄 Projects file: ${projectsFile}`);
});

