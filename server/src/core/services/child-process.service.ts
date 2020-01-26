import { Injectable } from '@nestjs/common';
import * as cp from 'child_process';

@Injectable()
export class ChildProcessService {
  async execFile(pathToFile: string): Promise<any> {
    const parameters = [];
    const options = {
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    };

    const child = cp.fork(pathToFile, parameters, options as any);
    child.on('message', message => {
      console.log('message from child:', message);
      child.send('Hi');
    });

    child.on('error', (e) => {
      console.log(e);
    });
  }

  async combineFiles(file1Path, file2Path, outputFilePath) {
    await new Promise((res, rej) => {
      cp.exec(`type ${file1Path} ${file2Path} > ${outputFilePath}`, (err) => {
        if (err) {
          throw err;
        }
        res();
      });
    });
  }
}
