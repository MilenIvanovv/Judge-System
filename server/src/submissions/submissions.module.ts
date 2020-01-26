import { Module, Post } from '@nestjs/common';
import { SubmissionsController } from './submissions.controller';
import { SubmissionsService } from './submissions.service';

@Module({
  controllers: [SubmissionsController],
  providers: [SubmissionsService]
})
export class SubmissionsModule {

  @Post()
  submit
}
