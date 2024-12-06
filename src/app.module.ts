import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { TerrainsModule } from './terrains/terrains.module';

@Module({
  imports: [ClientsModule, TerrainsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
