import express from 'express';
import { storage } from '../server/storage.js';

// Create Express app for serverless function
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add API routes here
// Example routes - you can expand these based on your needs
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Add your other API routes here
// app.get('/api/users', async (req, res) => {
//   // Use storage to get users
//   res.json({ users: [] });
// });

// Export for Vercel
export default app; 