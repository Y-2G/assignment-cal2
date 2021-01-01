import Process from './Process'
import INumber from '../data/INumber'

abstract class Operator extends Process {
  protected value: string;

  public start() {
    throw 'invalid value';
  }

  public abstract execute(inum: INumber);
}

export default Operator;