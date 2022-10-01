import express from 'express';
import loggers from './loggers';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
import path from 'path';
const images = express.Router(); //Create a router

const resizeImage = 'image/resized-fjord.jpg';

/**
 * To send data
 */

images.get('/images', loggers, async (req, res) => {
  //Condition that the endpoint should be open with 200 'OK'
  if (res.statusCode === 200) {
    try {
      //Create an object and assign the queries
      let queryObj = req.query;
      let fileName = queryObj.filename;
      let height = Number(queryObj.height);
      let width = Number(queryObj.width);

      //resize the image and wait until save resize image to new file
      const resize = await sharp(`image/${fileName}.jpg`)
        .resize(width, height)
        .toFile(resizeImage);
      return res.sendFile(path.resolve(`${resizeImage}`)); //display the resized image to the browser
    } catch (err) {
      //if the user doesn't provide query, the catch will handle it
      return res.send(
        'Please provide a query after "/". For example : ?filename=fjord&width=250&height=250'
      );
    }
  } else {
    return res.send(res.statusMessage);
  }
});

export default images; //export the router
