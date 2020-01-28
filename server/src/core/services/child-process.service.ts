import { Injectable } from '@nestjs/common';
import * as cp from 'child_process';
import { SubmissionOutputDTO } from '../../submissions/models/submission-output.dto';

@Injectable()
export class ChildProcessService {
  async execFile(pathToFile: string, tests: { inputs: string[], output: string }[]): Promise<SubmissionOutputDTO | string | any> {
    const parameters = tests[0].inputs;
    const options = {
    };

    const startTime = new Date().getTime();

    return await new Promise((res, rej) => {

      const child = cp.execFile('node', [pathToFile, ...parameters], options as any, (error, stdout: string, stderr) => {
        const endTime = new Date().getTime();

        if (error) {
          res('error');
        }

        const output = stdout.split('\n');
        output.pop();
        const memory = output.pop();

        res({ answer: output, time: `${endTime - startTime} ms`, memory});

        // console.log('error', error);
        // console.log('stdout', stdout);
        // console.log('stderr', stderr);
      });

      let isProcessRunning = true;
      child.on('exit', () => isProcessRunning = false);

      setTimeout(() => {
        if (isProcessRunning) {
          child.kill();
        }
      }, 5000);
    });
  }
}
