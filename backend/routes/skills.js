const express = require('express');
const router = express.Router();

const skills = {
  'Languages': ['Python', 'JavaScript', 'SQL'],
  'Data & ML': ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
  'Web': ['React.js', 'HTML', 'CSS'],
  'Databases': ['MySQL', 'PostgreSQL'],
  'Tools': ['Git', 'GitHub', 'VS Code', 'Power BI']
}

router.get('/', (req, res) => {
  res.json(skills);
});

module.exports = router;
