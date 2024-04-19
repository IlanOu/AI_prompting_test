const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');

// Basic Auth middleware
const authMiddleware = basicAuth({
  users: { 'admin': 'password' },
  unauthorizedResponse: { error: 'Unauthorized' }
});

// Middleware pour parser le corps des requêtes
app.use(express.json());

// Route GET avec paramètres dans la query
app.get('/api/data', authMiddleware, (req, res) => {
  const { name, age } = req.query;
  res.json({ name, age });
});

// Route POST avec données dans le corps de la requête
app.post('/api/data', authMiddleware, (req, res) => {
  const data = req.body;
  res.json(data);
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});