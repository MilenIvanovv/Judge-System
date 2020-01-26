import { Injectable } from '@nestjs/common';
import * as cp from 'child_process';

@Injectable()
export class ChildProcessService {
  async execFile(pathToFile: string, tests: { inputs: string[], output: string }[]): Promise<any> {
    const parameters = tests[0].inputs;
    const options = {
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    };

    const child = cp.fork(pathToFile, parameters, options as any);

    return await new Promise((res, rej) => {
      child.on('message', (data) => {
        res(data);
      });

      child.on('error', (data) => {
        res(data);
      });
    });
  }
}
