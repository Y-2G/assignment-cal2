import Operator from './Operator';
import { TEXT_MULTIPLY } from '../constants/data';

// 乗算コマンドのクラス
class Multiply extends Operator {
  protected value: string = TEXT_MULTIPLY;

  public execute(n: number): number {
    return this.next.execute(n * this.next.getValue());
  }
}

export default Multiply;