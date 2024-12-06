import { Module } from '@nestjs/common';
import { TerrainsService } from './terrains.service';
import { TerrainsController } from './terrains.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TerrainsController],
  providers: [TerrainsService, PrismaService],
})
export class TerrainsModule {}
