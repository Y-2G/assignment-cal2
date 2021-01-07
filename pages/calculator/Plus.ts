import Operator from './Operator'
import { TEXT_PLUS } from '../setting/data';

// 加算コマンドのクラス
class Plus extends Operator {
  protected value: string = TEXT_PLUS;

  public execute(n: number): number {
    return this.next.execute(n + this.next.getValue());
  }
}

export default Plus;