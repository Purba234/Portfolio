export const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A modern portfolio built with React, Framer Motion and Vite',
    tech: ['React', 'Framer Motion', 'AOS', 'Node.js'],
    liveUrl: '',
    repoUrl: 'https://github.com/Purba234/purba_portfolio',
    image: ''
  },
  {
    id: 3,
    title: 'Customer Shopping Behavior Dashboard',
    description: 'Comprehensive data analytics dashboard analyzing customer shopping patterns, behavior trends, and purchase insights with interactive visualizations and predictive modeling',
    tech: ['Python', 'Pandas', 'Power BI', 'Data Cleaning', 'Data Manipulation', 'Analytics'],
    liveUrl: '',
    repoUrl: '',
    image: ''
  },
  {
    id: 4,
    title: 'Spotify Music Data Analysis',
    description: 'Power BI dashboard analyzing Spotify Top 50 data, highlighting top artists, popularity distribution, explicit vs non-explicit share, average song duration, ranking trends over time, and album/track patterns through interactive KPI cards and visuals.',
    tech: ['Power BI', 'DAX', 'Data Cleaning', 'Data Transformation', 'Data Analysis'],
    liveUrl: '',
    repoUrl: 'https://github.com/Purba234/Spotify-Power-BI-Dashboard',
    image: ''
  }
];

// Helper function to filter projects by tech
export const filterProjectsByTech = (tech) => {
  return projects.filter(p => p.tech.map(t => t.toLowerCase()).includes(tech.toLowerCase()));
};
