import cors from 'cors';
import App from './app';
import logger from './middlewares/logger';
import { LinkRoute } from '@/routes/link.route';

const app = new App({
  port: 8000,
  middlewares: [logger(), cors()],
  routes: [new LinkRoute()],
});

app.listen();
