import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FsService {

  async readFromFile(path): Promise<any> {
    return await new Promise((res, rej) => {
      fs.readFile(path, (err, data) => {
        if (err) {
          throw err;
        }

        res(data);
      });
    });
  }

  async writeToFile(path, data): Promise<void> {
    await new Promise((res, rej) => {
      fs.writeFile(path, data, (err) => {
        if (err) {
          throw err;
        }
        res();
      });
    });
  }

  async appendFile(path, data) {
    await new Promise((res, rej) => {
      fs.appendFile(path, data, (err) => {
        if (err) {
          throw err;
        }
        res();
      });
    });
  }
}
