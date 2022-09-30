import express from 'express';
import loggers from './loggers';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
const images = express.Router(); //Create a router

const oldImage = 'images/fjord.jpg';
const resizeImage = 'images/resized-fjord.jpg';

/**
 * To send data
 */
images.get('/images', loggers, async (req, res) => {
  res.send('Working from /images');

  try {
    //resize the image
    const resize = await sharp(oldImage).resize(300, 300).toFile(resizeImage);
  } catch (err) {
    console.log(err);
  }
});

export default images; //export the router
