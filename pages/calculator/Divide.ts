import Operator from './Operator'

class Divide extends Operator {
  protected value: string = '÷';

  public execute(n: number): number {
    return this.next.execute(n / this.next.getValue());
  }
}

export default Divide;