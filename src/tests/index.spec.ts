import app from '../index';
import request from 'supertest'; //testing HTTP
import { image_processing } from '../api/images';
import express from 'express';

describe('Testing the api/images endpoint', () => {
  it('returns 200 OK', async () => {
    await request(app).get('/api/images').expect(200); //Check the statusCode and should be 200"OK"
  });

  it('Expected 404 not found.', async () => {
    await request(app).get('/api/images/a').expect(404);
  });
});

describe('Testing image processing function', () => {
  const req = express.request;
  const res = express.response;
  it('Expected function to not throw an exception.', async () => {
    expect(() => {
      image_processing(req, res);
    }).not.toThrow();
  });
});
