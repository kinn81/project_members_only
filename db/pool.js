const { Pool } = require('pg');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

// Debug logging
console.log('Starting database connection setup...');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('Is Production:', isProduction);

const connectionString = `postgresql://${process.env.DBUSER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DBPORT}/${process.env.DATABASE}`;

console.log('Environment:', process.env.NODE_ENV);
console.log('Is Production:', isProduction);
console.log('Database URL:', isProduction ? process.env.DATABASE_URL : connectionString);

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

// More detailed error handling
pool.on('error', (err, client) => {
  console.error('PostgreSQL Pool Error:', err);
  console.error('Error detail:', err.detail);
  console.error('Error code:', err.code);
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

// Test the connection immediately
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Initial connection test failed:', err);
  } else {
    console.log('Initial connection test successful');
  }
});

module.exports = {
  query: (text, params) => {
    console.log('Executing query:', text);
    return pool.query(text, params);
  },
  pool: pool,
};
