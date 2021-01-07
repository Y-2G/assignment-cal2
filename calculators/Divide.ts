import Operator from './Operator'
import { TEXT_DIVIDE } from '../constants/data';

// 除算コマンドのクラス
class Divide extends Operator {
  protected value: string = TEXT_DIVIDE;

  public execute(n: number): number {
    return this.next.execute(n / this.next.getValue());
  }
}

export default Divide;