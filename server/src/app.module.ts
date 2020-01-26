import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubmissionsModule } from './submissions/submissions.module';
import { CoreModule } from './core/core.module';
import { FsService } from './core/services/fs/fs.service';

@Module({
  imports: [SubmissionsModule, CoreModule],
  controllers: [AppController],
  providers: [AppService, FsService],
})
export class AppModule {}
