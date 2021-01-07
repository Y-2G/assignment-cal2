import Divide from './Divide';
import Multiply from './Multiply';
import Minus from './Minus';
import Plus from './Plus';
import Equal from './Equal';
import ComNumber from './ComNumber';
import Calclator from './Calculator'

// インスタンス生成クラス
class Factory {

  static createCommand(s: string) {
    switch( s ) {
      case '+':
        return this.createPlus();
      case '-':
        return this.createMinus();
      case '×':
        return this.createMultiply();
      case '÷':
        return this.createDivide();
      case '=':
        return this.createEqual();
      default:
        return this.createNumber(Number(s));
    }
  }

  static createPlus(): Plus {
    return new Plus();
  }

  static createMinus(): Minus {
    return new Minus();
  }

  static createMultiply(): Multiply {
    return new Multiply();
  }
  
  static createDivide(): Divide {
    return new Divide();
  }

  static createEqual(): Equal{
    return new Equal();
  }

  static createNumber(n: number): ComNumber {
    return new ComNumber(n);
  }

  static createCalculator(): Calclator {
    return new Calclator();
  }
}

export default Factory;