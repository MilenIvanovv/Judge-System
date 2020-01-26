import { Injectable } from '@nestjs/common';
import { FsService } from '../core/services/fs.service';
import { ChildProcessService } from '../core/services/child-process.service';

@Injectable()
export class SubmissionsService {

  private userInputPath = './src/user-code/code.js';
  private userInputWrapperPath = './src/user-code/wrapper.js';

  constructor(
    private readonly fsService: FsService,
    private readonly childProcessService: ChildProcessService,
    ) {}

  async sumbmitSolution(code: string, problemId: string) {
    await this.fsService.writeToFile(this.userInputPath, code);
    const wrapper = await this.fsService.readFromFile(this.userInputWrapperPath);
    await this.fsService.appendFile(this.userInputPath, wrapper);
    return await this.childProcessService.execFile(this.userInputPath);

    // return await this.fsService.readFromFile(this.tempFolderPath);
  }
}
