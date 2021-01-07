import Operator from './Operator'
import { TEXT_MINUS } from '../setting/data';

// 減算コマンドのクラス
class Minus extends Operator {
  protected value: string = TEXT_MINUS;

  public execute(n: number): number {
    return this.next.execute(n - this.next.getValue());
  }
}

export default Minus;