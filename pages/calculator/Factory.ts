import Divide from './Divide';
import Equal from './Equal';
import Minus from './Minus';
import Multiply from './Multiply';
import Plus from './Plus';
import NumberProcess from './NumberProcess';

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

  static createNumber(n: number): NumberProcess {
    return new NumberProcess(n);
  }

}

export default Factory;