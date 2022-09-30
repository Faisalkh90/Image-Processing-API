import express from 'express';

/**
 * Function that will display path when visited
 * @param req
 * @param res
 * @param next
 */
function logger(req: express.Request, res: express.Response, next: Function) {
  let path = req.path;
  console.log(`${path} was visited`);
  next();
}

export default logger; //export the function
