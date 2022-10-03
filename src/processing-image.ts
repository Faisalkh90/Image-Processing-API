import sharp from 'sharp';
import path from 'path';
import express from 'express';
import sizeOf from 'image-size';
import { promises as fsPromises } from 'fs';
const resizeImage = 'image/resized-fjord.jpg';

//resize the image and wait until save resize image to new file
async function resize(
  fileName: string,
  width: number,
  height: number
): Promise<void> {
  const resize = await sharp(`image/${fileName}.jpg`)
    .resize(width, height)
    .toFile(resizeImage);
}
//function that will take the image and resized
async function image_processing(req: express.Request, res: express.Response) {
  //Create an object and assign the queries
  let queryObj = req.query;
  const fileName: string = String(queryObj.filename);
  let height: number = Number(queryObj.height);
  let width: number = Number(queryObj.width);
  if (fileName !== 'fjord') {
    return res.send(
      `Input file is missing: "${fileName}". It should to be "fjord" For example:http://localhost:3000/api/images/?filename=fjord&width=250&height=250`
    );
  }

  /**
   * Cached the resize image
   * To check the file if exist or no
   * if existed, will check the old query dimension(width and height) with new query dimension,if dimension is same will send the resize image without resize again
   * If the file new, will call method resize and send it to browser
   */
  let checkFile: object | null;
  try {
    checkFile = await fsPromises.stat(resizeImage);
  } catch (e) {
    checkFile = null;
  }
  if (checkFile) {
    let dimensions = sizeOf(resizeImage);
    if (dimensions.height == height && dimensions.width == width) {
      console.log('exists');
      return res.sendFile(path.resolve(`${resizeImage}`));
    } else {
      console.log('exists but not same');

      const newImage = await resize(fileName, width, height);
      return res.sendFile(path.resolve(`${resizeImage}`)); //display the resized image to the browser
    }
  } else {
    console.log('new');
    const newImage = await resize(fileName, width, height);
    return res.sendFile(path.resolve(`${resizeImage}`));
  }
}

export default image_processing;
