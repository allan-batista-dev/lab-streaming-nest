import { Module } from '@nestjs/common';
import { StreamingService } from './streaming.service';
import { StreamingController } from './streaming.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [StreamingController],
  providers: [StreamingService, PrismaService],
})
export class StreamingModule {}
