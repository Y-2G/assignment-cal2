import Command from './Command'

// 演算コマンドのベースクラス
abstract class Operator extends Command {
  protected value: string;

  public setNext(c: Command): void {
    if(c instanceof Operator) throw 'commands of the same type consecutive';
    this.next = c;
  }

  public start(): void {
    throw 'start from the operator';
  }

  public abstract execute(n: number): number;
}

export default Operator;