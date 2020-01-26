import { Module, Post } from '@nestjs/common';
import { SubmissionsController } from './submissions.controller';
import { SubmissionsService } from './submissions.service';
import { FsService } from '../core/services/fs.service';
import { ChildProcessService } from '../core/services/child-process.service';

@Module({
  controllers: [SubmissionsController],
  providers: [SubmissionsService, FsService, ChildProcessService]
})
export class SubmissionsModule {}
