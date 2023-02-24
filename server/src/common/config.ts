import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();
dotenv.config({
  path: path.join(__dirname, '../../.env')
});

export default {
  PORT: process.env['PORT'] || 4000,
  API_URL: process.env['API_URL'] || 'http://localhost:',
  NODE_ENV: process.env['NODE_ENV'],
  // CLIENT_URL: process.env['CLIENT_URL'] || 'http://localhost:3000',
  CLIENT_URL: process.env['CLIENT_URL'] || 'https://skrama-polikarbonat.onrender.com',
  SALT: process.env['SALT'] || 5,
  JWT_ACCESS_SECRET_KEY: process.env['JWT_ACCESS_SECRET_KEY'] || 'access-secret-key',
  JWT_REFRESH_SECRET_KEY: process.env['JWT_REFRESH_SECRET_KEY'] || 'refresh-secret-key',
  AUTH_MODE: process.env['AUTH_MODE'] === 'true',
  DB_CONNECT: process.env['DB_CONNECT'] || 'mongodb+srv://skrama:skrama123@cluster0.3noostx.mongodb.net/?retryWrites=true&w=majority',
  SMTP_HOST: process.env['SMTP_HOST'] || 'smtp.gmail.com',
  SMTP_PORT: process.env['SMTP_POPT'] || 587,
  SMTP_USER: process.env['SMTP_USER'] || 'qa.a.kurlovich@gmail.com',
  SMTP_PASSWORD: process.env['SMTP_PASSWORD'] || '111',
};