import Operator from './Operator'
import INumber from '../data/INumber'

class Minus extends Operator {
  protected value: string = '-';

  public execute(inum: INumber) {
    inum.minus(this.next.getValue());
    this.next.execute(inum);
  }
}

export default Minus;