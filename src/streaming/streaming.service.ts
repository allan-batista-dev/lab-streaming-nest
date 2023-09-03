import { Injectable } from '@nestjs/common';
import { CreateStreamingDto } from './dto/create-streaming.dto';
import { UpdateStreamingDto } from './dto/update-streaming.dto';
import { createClient } from '@supabase/supabase-js';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class StreamingService {
  constructor(private readonly prisma: PrismaService) { }

  async findOne(id: number) {
    return await this.prisma.videos.findUnique({
      where: {
        id: 1
      }
    })

  }

}
