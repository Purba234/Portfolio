require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contactRoutes = require('./routes/contact');

// serve static assets (resume PDF, images)
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

// Skills endpoint
app.get('/api/skills', (req, res) => {
  const skills = {
    'Languages': ['Python', 'JavaScript', 'SQL'],
    'Data & ML': ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    'Web': ['React.js', 'HTML', 'CSS'],
    'Databases': ['MySQL', 'PostgreSQL'],
    'Tools': ['Git', 'GitHub', 'VS Code', 'Power BI']
  };
  res.json(skills);
});

// Projects endpoint
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio',
      description: 'A modern portfolio built with React, Express and MongoDB',
      tech: ['React', 'Framer Motion', 'AOS', 'Node.js'],
      liveUrl: '',
      repoUrl: 'https://github.com/yourusername/portfolio',
      image: ''
    },
    {
      id: 2,
      title: 'Customer Shopping Behavior Dashboard',
      description: 'Comprehensive data analytics dashboard analyzing customer shopping patterns, behavior trends, and purchase insights with interactive visualizations and predictive modeling',
      tech: ['Python', 'Pandas', 'Power BI', 'Data Cleaning', 'Data Manipulation', 'Analytics'],
      liveUrl: '',
      repoUrl: '',
      image: ''
    }
  ];
  res.json(projects);
});

// Serve public files (e.g., resume) from /api/resume via static middleware
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/resume', (req, res) => {
  const file = path.join(__dirname, 'Purba_Saha_CV.pdf');
  res.download(file, 'Purba_Saha_CV.pdf', (err) => {
    if (err) console.error('Resume download error:', err);
  });
});

const PORT = process.env.PORT || 5001;

async function start() {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
    } else {
      console.log('MONGODB_URI not set — skipping MongoDB connect (you can still run the server)');
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();
