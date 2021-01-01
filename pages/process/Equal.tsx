import Operator from './Operator'
import INumber from '../data/INumber'

class Equal extends Operator {
  protected value: string = '=';

  public toString() {
    return this.next !== null ? this.next.toString() : '';
  }

  public execute(inum: INumber) {
    if(this.hasNext() === true) this.next.execute(inum)
  }
}

export default Equal;