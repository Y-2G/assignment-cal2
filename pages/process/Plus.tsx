import Operator from './Operator'
import INumber from '../data/INumber'

class Plus extends Operator {
  protected value: string = '+';

  public execute(inum: INumber) {
    inum.plus(this.next.getValue());
    this.next.execute(inum);
  }
}

export default Plus;