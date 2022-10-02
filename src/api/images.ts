import express from 'express';
import loggers from './loggers';
import sharp from 'sharp';
import path from 'path';
const images = express.Router(); //Create a router

const resizeImage = 'image/resized-fjord.jpg';
/**
 * To send data
 */

//function that will take the image and resized
async function image_processing(req: express.Request, res: express.Response) {
  //Create an object and assign the queries

  let queryObj = req.query;
  const fileName: string = String(queryObj.filename);
  let height: number = Number(queryObj.height);
  let width: number = Number(queryObj.width);
  if (fileName !== 'fjord') {
    return res.send('Input file is missing:fjord1. It should to be "fjord"');
  }
  //resize the image and wait until save resize image to new file
  const resize = await sharp(`image/${fileName}.jpg`)
    .resize(width, height)
    .toFile(resizeImage);
  return res.sendFile(path.resolve(`${resizeImage}`)); //display the resized image to the browser
}
images.get(
  '/images',
  loggers,
  async (req: express.Request, res: express.Response) => {
    //Condition that the endpoint should be open with 200 'OK'
    if (res.statusCode === 200) {
      try {
        await image_processing(req, res);
      } catch (err) {
        // console.log(err);
        if (err instanceof Error) {
          //Check for query parameters like filename, height and width before sending image for processing.
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
export { image_processing };
