import Process from './Process'
import INumber from './INumber'

class ClickEqualButton extends Process {
  protected value: string = '=';

  public execute(inum: INumber) {
    inum.equal();
  }
}

export default ClickEqualButton;