import { Sorter } from "./Sorter";
export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  swap(index: number): void {
    // swap elements
    const temp = this.data[index];
    this.data[index] = this.data[index + 1];
    this.data[index + 1] = temp;
  }
  compare(index: number): boolean {
    return this.data[index] > this.data[index + 1];
  }
  get length(): number {
    return this.data.length;
  }
}
