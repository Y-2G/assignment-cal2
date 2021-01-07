// 各種コマンドのベースクラス
abstract class Command {
  
  protected value: any = null;

  protected next: Command = null;
  
  public abstract setNext(c: Command): void

  public abstract start(): any;

  public abstract execute(n: number): number;

  public getValue(): any {
    return this.value;
  }

}

export default Command;