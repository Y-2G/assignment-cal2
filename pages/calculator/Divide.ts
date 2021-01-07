import Operator from './Operator'

// 除算コマンドのクラス
class Divide extends Operator {
  protected value: string = '÷';

  public execute(n: number): number {
    return this.next.execute(n / this.next.getValue());
  }
}

export default Divide;