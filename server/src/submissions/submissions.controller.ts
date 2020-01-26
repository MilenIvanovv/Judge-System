import { Controller, Post, Body, Query } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';

@Controller('problems/:problemId/submissions')
export class SubmissionsController {

  constructor(private readonly submitService: SubmissionsService) {}

  @Post()
  async submit(@Body('code') code: string, @Query('problemId') problemId: string) {
    return await this.submitService.sumbmitSolution(code, problemId);
  }
}
