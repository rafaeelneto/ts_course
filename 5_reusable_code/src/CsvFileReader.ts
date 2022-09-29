// this is a node standard funcion, so it should be using @types/node
// to properly work
import fs from 'fs';
import {stringToDate} from './utils';
import {MatchResult} from './MatchResult';

type MatchData = [Date, String, String, number, number, MatchResult, String]

export default class CsvFileReader {
  data: MatchData[] = [];

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
      .map((row: string[]): MatchData => {
        return [
          stringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ]
      });
  }
}
