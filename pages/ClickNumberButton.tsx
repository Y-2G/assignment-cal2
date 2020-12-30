import Process from './Process'
import INumber from './INumber'

class ClickNumberButton extends Process {
  protected value: number;

  public constructor(value: number) {
    super();
    this.value = value;
  }

  public start() {
    const inum = new INumber(this.value);
    this.next.execute(inum);
    return inum;
  }

  public execute(inum: INumber) {
    this.next.execute(inum);
  }
}

export default ClickNumberButton;