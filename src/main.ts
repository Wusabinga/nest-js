import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ejs from 'ejs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'src/dev-labs/public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src/dev-labs/views'));
  app.setViewEngine('ejs');

  await app.listen(3000);
}

bootstrap();
