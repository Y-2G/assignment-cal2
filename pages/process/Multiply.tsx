import Operator from './Operator'
import INumber from '../data/INumber'

class Multiply extends Operator {
  protected value: string = '×';

  public execute(inum: INumber) {
    inum.multiply(this.next.getValue());
    this.next.execute(inum);
  }
}

export default Multiply;