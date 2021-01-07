import Command from './Command'

// 数値コマンドのクラス
class ComNumber extends Command {
  protected value: number;

  public constructor(value: number) {
    super();
    this.value = value;
  }

  public setNext(c: Command): void {
    if(c instanceof ComNumber) throw 'commands of the same type consecutive';
    this.next = c;
  }

  public start() {
    return this.next.execute(this.value);
  }

  public execute(n: number) {
    return this.next.execute(n);
  }
}

export default ComNumber;