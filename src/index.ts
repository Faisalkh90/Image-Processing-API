import express from 'express';
import routes from './api/index';
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Lionising on http://localhost:${port}`);
});

app.use(routes); //use the route's module as middleware.
