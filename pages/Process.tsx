import INumber from './INumber'

abstract class Process {
  protected value: any;
  protected next: Process;

  public setNext(next: Process) {
    this.next = next;
    return next;
  }

  public getValue() {
    return this.value;
  }

  public abstract start();
  public abstract execute(num: INumber);
}

export default Process;