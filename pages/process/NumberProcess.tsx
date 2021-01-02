import Process from './Process'

class ProcNum extends Process {
  protected value: number;

  public constructor(value: number) {
    super();
    this.value = value;
  }

  public start() {
    return this.next.execute(this.value);
  }

  public execute(n: number) {
    return this.next.execute(n);
  }
}

export default ProcNum;