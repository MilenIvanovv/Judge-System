import { Injectable } from '@nestjs/common';
import { FsService } from '../core/services/fs.service';
import { ChildProcessService } from '../core/services/child-process.service';

@Injectable()
export class SubmissionsService {

  private userInputPath = './src/user-code/code.js';
  private userInputWrapperPath = './src/user-code/wrapper.js';

  private tests = [{ inputs: ['1', '1'], output: '2'}];

  constructor(
    private readonly fsService: FsService,
    private readonly childProcessService: ChildProcessService,
    ) {}

  async sumbmitSolution(code: string, problemId: string) {
    await this.fsService.copyFile(this.userInputWrapperPath, this.userInputPath);
    await this.fsService.appendFile(this.userInputPath, code);

    return await this.childProcessService.execFile(this.userInputPath, this.tests);

    // return await this.fsService.readFromFile(this.tempFolderPath);
  }
}
