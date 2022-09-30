import express from 'express';
import loggers from './loggers';

const images = express.Router(); //Create a router

/**
 * To send data
 */
images.get('/images', loggers, (req, res) => {
  res.send('Working from /images');
});

export default images; //export the router
