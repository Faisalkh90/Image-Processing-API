import express from 'express';
import loggers from './loggers';
import sharp from 'sharp';
import path from 'path';
import image_processing from '../processing-image';
const images = express.Router(); //Create a router

const resizeImage = path.join(process.cwd(), 'image/resized-fjord.jpg');
/**
 * To send data
 */
images.get(
  '/images',
  loggers,
  async (req: express.Request, res: express.Response) => {
    //Condition that the endpoint should be open with 200 'OK'
    if (res.statusCode === 200) {
      try {
        await image_processing(req, res);
      } catch (err) {
        if (err instanceof Error) {
          //Check for query parameters like filename, height and width before sending image for processing.
          console.log('here');
          return res.send(err.message);
        } else {
          //if the user doesn't provide query, the catch will handle it
          return res.send(
            'Please provide a query after "/". For example : ?filename=fjord&width=250&height=250'
          );
        }
      }
    } else {
      return res.send(res.statusMessage);
    }
  }
);

export default images; //export the router
// export { image_processing, resize };
