import Command from './Command'
import { TEXT_EQUAL } from '../constants/data';

// 等価コマンドのクラス
class Equal extends Command {
  protected value: string = TEXT_EQUAL;

  public setNext(c: Command): void {
    throw 'equal is not able to have a next';
  }

  public start(): void {
    throw 'start from the operator';
  }

  public execute(n: number): number {
    return n;
  }

  public getValue(): string {
    return this.value;
  }

}

export default Equal;