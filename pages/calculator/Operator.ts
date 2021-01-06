import Process from './Process'

abstract class Operator extends Process {
  protected value: string;

  public setNext2(p: Process): void {
    if(p instanceof Operator) throw 'commands of the same type consecutive';
    this.next = p;
  }

  public start(): void {
    throw 'start from the operator';
  }

  public abstract execute(n: number): number;
}

export default Operator;