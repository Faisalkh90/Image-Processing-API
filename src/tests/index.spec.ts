import app from '../index';
import request from 'supertest'; //testing HTTP
import { resize, image_processing, checkExist } from '../processing-image';
import express from 'express';

describe('Testing the api/images endpoint', () => {
  it('returns 200 OK', async () => {
    await request(app).get('/api/images').expect(200); //Check the statusCode and should be 200"OK"
  });

  it('Expected 404 not found.', async () => {
    await request(app).get('/api/images/a').expect(404);
  });
});

describe('Testing image processing functions', () => {
  // const req = express.Request;
  // const res = express.response;
  // let queryObj = await req.query;

  it('Expected resize function to not throw an exception.', async () => {
    expect(async () => {
      await resize('fjord', 200, 200);
    }).not.toThrow();
  });
  it('Check image name if exist', async () => {
    let fileName = await checkExist('fjord');
    expect(fileName).toBeTruthy();
  });
});
