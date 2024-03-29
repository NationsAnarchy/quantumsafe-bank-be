import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({
    keys: ['mysecretcookiekey']
  }))
  await app.listen(3000);
}
bootstrap();
