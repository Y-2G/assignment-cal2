import Operator from './Operator'

// 減算コマンドのクラス
class Minus extends Operator {
  protected value: string = '-';

  public execute(n: number): number {
    return this.next.execute(n - this.next.getValue());
  }
}

export default Minus;