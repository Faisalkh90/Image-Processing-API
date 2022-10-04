import express from 'express';
import routes from './api/index';
const app = express();
const port = 3000;

app.listen(port, (): void => {
  console.log(`Lionising on http://localhost:${port}`);
});
app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Welcome to Image Processing API!');
});
app.use('/api', routes); //use the route's module as middleware.
export default app;
