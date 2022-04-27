const express = require('express');
const { repairsRouter } = require('./routes/repairs.routes');

const { usersRouter } = require('./routes/users.routes');

const { db } = require('./utils/database');

const app = express();

app.use(express.json());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

const PORT = 4001;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
