import express from 'express';
import images from './images';
import loggers from './loggers';
const routes = express.Router(); // create a router

routes.get('/', loggers, (req, res): void => {
  res.send('Working from /api');
});

routes.use(images); //use the route's module as middleware.

export default routes;
