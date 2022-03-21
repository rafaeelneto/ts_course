import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedCollection extends Sorter {
  constructor() {
    super();
  }
  head: Node | null = null;

  add(data: number) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    const OutOfBoundError = new Error(`Index out of bound`);
    if (!this.head) {
      throw OutOfBoundError;
    }

    let node: Node | null = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw OutOfBoundError;
  }

  swap(index: number): void {
    // swap elements
    const leftNode = this.at(index);
    const rightNode = this.at(index + 1);

    const leftData = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftData;
  }

  compare(index: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }
    return this.at(index).data > this.at(index + 1).data;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
