import Process from './Process'

abstract class Operator extends Process {
  protected value: string;

  public start(): void {
    throw 'invalid value';
  }

  public abstract execute(n: number): number;
}

export default Operator;