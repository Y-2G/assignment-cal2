import Operator from './Operator'
import INumber from '../data/INumber'

class Divide extends Operator {
  protected value: string = '÷';

  public execute(inum: INumber) {
    inum.divide(this.next.getValue());
    this.next.execute(inum);
  }
}

export default Divide;