/**
 * Backend Server Entry Point
 * Express application orchestrating routes, middleware, and static asset serving
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const chatRoutes = require('./routes/chatRoutes');
const { SUPPORTED_MODELS } = require('./config/models');

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_DIR = path.resolve(__dirname, '../frontend');

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// 1. Backend API Routes
app.use('/api', chatRoutes);

// 2. Frontend Static Asset Serving
app.use(express.static(FRONTEND_DIR));

// 3. Fallback Route for Single-Page Application (Express 5 compatible)
app.use((req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n================================================================`);
  console.log(`🚀 [BACKEND] Zenith AI Chatbot Server running on http://localhost:${PORT}`);
  console.log(`📂 [FRONTEND] Serving static UI from: ${FRONTEND_DIR}`);
  console.log(`📡 [MODELS] Active models: ${SUPPORTED_MODELS.map(m => m.id).join(', ')}`);
  console.log(`🔑 [CONFIG] Server API Key: ${process.env.GEMINI_API_KEY ? 'Configured in .env' : 'Not set in .env (UI entry enabled)'}`);
  console.log(`================================================================\n`);
});
