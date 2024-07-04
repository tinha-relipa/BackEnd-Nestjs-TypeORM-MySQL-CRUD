import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configs = app.get<ConfigService>(ConfigService);
  const port = configs.get<number>('app.port');
  const serviceName = configs.get<number>('app.serviceName');

  await app.listen(port, async () => {
    console.log(
      `${serviceName} running on port ${port}`,
    );
  });
}
bootstrap();
