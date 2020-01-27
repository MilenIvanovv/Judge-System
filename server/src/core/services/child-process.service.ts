import { Injectable } from '@nestjs/common';
import * as cp from 'child_process';

@Injectable()
export class ChildProcessService {
  async execFile(pathToFile: string, tests: { inputs: string[], output: string }[]): Promise<any> {
    const parameters = tests[0].inputs;
    const options = {
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
      silent: true,
      detached: true,
    };

    const startTime = new Date().getTime();
    const child = cp.fork(pathToFile, parameters, options as any);

    return await new Promise((res, rej) => {
      let answer;
      let endTime;

      child.on('message', (childRes) => {

        if (childRes.type === 'memory_usage') {
          res({ answer, time: `${endTime - startTime} ms`, memory: childRes.data});
        } else if (childRes.type === 'answer') {
          endTime = new Date().getTime();
          answer = childRes.data;
          child.send('get_memory_usage');
        }
      });

      child.stderr.on('data', (data) => {
        res('error');
      });
    });
  }
}
