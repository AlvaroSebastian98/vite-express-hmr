const environment = process.env.NODE_ENV || "development";
import express, { json, urlencoded } from 'express'
import indexRouter from './lib/routes/index.js'
import gatewayRouter from './lib/routes/gateway.js'
import logger from 'morgan'
import { join, dirname, resolve } from 'path'
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser'
import server from './server.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { PORT = 3000 } = environment

const app = express()

// view engine setup
app.set('views', join(__dirname, 'views'));
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

// Serve app production bundle
app.use(express.static('dist'))

// Serve API requests from the router
app.use('/', server.handleRedirect, indexRouter);
app.use('/api', gatewayRouter)

global.environment = environment;

server.listen(app, PORT, () => {
  console.log(`Server running on port ${PORT}`)
})