
require('dotenv').config()
const express = require('express');
const connectToDB = require("./config/dbconnect")
const app = express();

// routes
const vaultEntryRoutes = require('./routes/vaultEntry');
const userRoutes = require('./routes/user')
const unlockRequestRoutes = require('./routes/unlockRequast');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('well-come!')
})

app.use('/api/users', userRoutes);
app.use('/api/vault', vaultEntryRoutes);
app.use('/api/unlock', unlockRequestRoutes);

connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
  });
});