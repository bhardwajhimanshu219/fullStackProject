const express = require('express');
const app = express();
const connectDB = require('./config/db');

//coneectDB() function is basically used to connect mongodb atlas with our server

connectDB();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('API running');
});
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/posts', require('./routes/posts'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port no ${PORT}`));
