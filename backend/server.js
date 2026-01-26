require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contactRoutes = require('./routes/contact');
const projectsRoutes = require('./routes/projects');
const skillsRoutes = require('./routes/skills');

// serve static assets (resume PDF, images)
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/skills', skillsRoutes);

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
