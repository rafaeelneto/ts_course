import { Sorter } from "./Sorter";
export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  swap(index: number): void {
    // swap elements
    const charArray = this.data.split("");
    const temp = charArray[index];
    charArray[index] = charArray[index + 1];
    charArray[index + 1] = temp;
    this.data = charArray.join("");
  }
  compare(index: number): boolean {
    return this.data[index].toLowerCase() > this.data[index + 1].toLowerCase();
  }
  get length(): number {
    return this.data.length;
  }
}
