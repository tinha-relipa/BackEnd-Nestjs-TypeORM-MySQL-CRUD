import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfigs from './config/app.config';
import databaseConfigs from './config/database.config';

const configs = [
  appConfigs,
  databaseConfigs
]

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: config.get<string>('database.host'),
          port: +config.get<number>('database.port'),
          username: config.get<string>('database.username'),
          password: config.get<string>('database.password'),
          database: config.get<string>('database.name'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        }
      },
      inject: [ConfigService]
    }),
    UsersModule,
    PostsModule,
    ConfigModule.forRoot({
      load: configs
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

