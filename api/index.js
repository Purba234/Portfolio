const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

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
      repoUrl: 'https://github.com/Purba234/Portfolio',
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

// Resume download endpoint
app.get('/api/resume', (req, res) => {
  const file = path.join(__dirname, 'Purba_Saha_CV.pdf');
  res.download(file, 'Purba_Saha_CV.pdf', (err) => {
    if (err) {
      console.error('Resume download error:', err);
      res.status(404).json({ error: 'Resume not found' });
    }
  });
});

// For serverless
module.exports = app;
