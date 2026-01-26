const express = require('express');
const router = express.Router();
// Simple static projects response for demo — replace with DB if needed
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

// Support optional filtering by tech query: /api/projects?tech=React
router.get('/', (req, res) => {
  const { tech } = req.query;
  if (tech) {
    const filtered = projects.filter(p => p.tech.map(t => t.toLowerCase()).includes(tech.toLowerCase()));
    return res.json(filtered);
  }
  res.json(projects);
});

module.exports = router;
