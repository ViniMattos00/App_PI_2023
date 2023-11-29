const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Import CORS middleware

const app = express();

// Database connection configuration
const pool = new Pool({
  // user: 'postgres',
  // host: 'localhost',
  // database: 'postgres',
  // password: 'makeitwork',
  // port: 5432, // Your PostgreSQL port

  user: 'vinicius.mattos@sou.unijui.edu.br',
  host: '200.17.86.20',
  database: 'santa_rosa',
  password: 'DFEw3fq8jfqw',
  port: 55432, // Your PostgreSQL port
});

// Use CORS middleware
app.use(cors());

app.get('/getData', async (req, res) => {
  try {
    // Example query to get data
    //const result = await pool.query('SELECT cddepto FROM alocacao');
    const result = await pool.query('SELECT EMW_TEMPERATURE FROM nit2xli ORDER BY TIME DESC LIMIT 20');
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
