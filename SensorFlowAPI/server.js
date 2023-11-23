// server.js
const express = require('express');
const { Pool } = require('pg');

const app = express();

// Database connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'makeitwork',
  port: 5432, // Your PostgreSQL port
});

app.get('/getData', async (req, res) => {
  try {
    // Example query to get data
    const result = await pool.query('SELECT cddepto FROM alocacao');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
