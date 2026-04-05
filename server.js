const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/krism')
  .then(() => console.log('MongoDB connecté !'))
  .catch(err => console.log('Erreur MongoDB :', err));

app.use('/api/clients', require('./routes/clients'));
app.use('/api/abonnements', require('./routes/abonnements'));
app.use('/api/commandes', require('./routes/commandes'));

app.get('/', (req, res) => {
  res.send('Serveur K-RISM fonctionne !');
});

app.listen(port, () => {
  console.log(`Serveur K-RISM démarré sur http://localhost:${port}`);
});