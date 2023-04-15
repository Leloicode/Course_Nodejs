import mongoose from 'mongoose';
import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
const app = express();
import UserApI from './Api/User.js';
import ConnectDB from './Api/ConnectDB.js';
import ProductApi from './Api/Product.js';
import routes from './routes/index.js';
const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')));


app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', 'src/views');

// routes
routes(app);

//product api
ProductApi(app);

//User api
UserApI(app);

// mongoose.set('strictQuery', false)
//connect mongoDB
ConnectDB(mongoose, app, port);