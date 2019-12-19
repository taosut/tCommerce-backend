import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { GlobalExceptionFilter } from './shared/filters/global-exception.filter';
import { SharedModule } from './shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './shared/config/config.service';
import { EConfig } from '../config/config.enum';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { InventoryModule } from './inventory/inventory.module';
import { AttributeModule } from './attribute/attribute.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (_config: ConfigService) => ({
        uri: _config.get(EConfig.MONGO_URI),
        retryDelay: 500,
        retryAttempts: 3,
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }),
      inject: [ConfigService]
    }),
    SharedModule,

    CategoryModule,
    ProductModule,
    CartModule,
    InventoryModule,
    AttributeModule
  ],
  providers: [GlobalExceptionFilter]
})
export class AppModule {
  static port: number;

  constructor(private readonly _config: ConfigService) {
    AppModule.port = AppModule.normalizePort(_config.get(EConfig.PORT));
  }

  private static normalizePort(portArg: number | string): number {
    const port: number = typeof portArg === 'string' ? parseInt(portArg, 10) : portArg;
    if (isNaN(port)) {
      throw new Error('Invalid port number!');
    } else {
      return port;
    }
  }
}