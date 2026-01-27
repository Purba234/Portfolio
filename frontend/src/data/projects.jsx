export const projects = [
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

// Helper function to filter projects by tech
export const filterProjectsByTech = (tech) => {
  return projects.filter(p => p.tech.map(t => t.toLowerCase()).includes(tech.toLowerCase()));
};
