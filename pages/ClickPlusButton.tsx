import Process from './Process'
import INumber from './INumber'

abstract class OperatorProcess extends Process {
  protected value: string = '+';

  public start() {
    throw 'invalid value';
  }

  public abstract execute(inum: INumber);
}

class ClickPlusButton extends OperatorProcess {
  protected value: string = '+';

  public execute(inum: INumber) {
    inum.plus(this.next.getValue());
    this.next.execute(inum);
  }
}

export default ClickPlusButton;