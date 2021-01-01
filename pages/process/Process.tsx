import INumber from '../data/INumber'

abstract class Process {
  protected value: any = null;
  protected next: Process = null;

  public setNext(p: Process) {
    if(this.hasNext() === true) this.next.setNext(p);
    if(this.hasNext() === false) this.next = p;
  }

  public hasNext() {
    return this.next !== null;
  }

  public getValue() {
    return this.value;
  }

  public toString() {
    return this.value + (this.next !== null ? this.next.toString() : '');
  }

  public abstract start();
  public abstract execute(num: INumber);
}

export default Process;