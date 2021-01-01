import Process from '../process/Process';

class Queue {
  private children: Process[];

  constructor() {
    this.children = [];
  }

  append(p: Process) {
    if(this.children[0]) this.children[0].setNext(p)
    this.children.push(p);
  }

  clear() {
    this.children = [];
  }

  execute() {
    const first = this.children[0];
    return first.start();
  }

  toString() {
    const first = this.children[0];
    return first ? first.toString() : '';
  }
}


export default Queue;