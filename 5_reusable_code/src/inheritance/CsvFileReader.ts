// this is a node standard funcion, so it should be using @types/node
// to properly work
import fs from 'fs';
import { stringToDate } from '../utils';

export abstract class CsvFileReader<T> {
  data: T[] = [];
  abstract rowParser(row: string[]): T;

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row): string[] => {
        return row.split(',');
      })
      .map(this.rowParser);
  }
}
