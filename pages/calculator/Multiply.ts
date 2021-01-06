import Operator from './Operator'

class Multiply extends Operator {
  protected value: string = '×';

  public execute(n: number): number {
    return this.next.execute(n * this.next.getValue());
  }
}

export default Multiply;