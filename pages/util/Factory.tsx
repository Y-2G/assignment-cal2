import Queue from '../data/Queue';
import Divide from '../process/Divide';
import Equal from '../process/Equal';
import Minus from '../process/Minus';
import Multiply from '../process/Multiply';
import NumberProcess from '../process/NumberProcess';
import Plus from '../process/Plus';

class Factory {
  static createQueue(): Queue {
    return new Queue();
  }

  static createNumber(n: number): NumberProcess {
    return new NumberProcess(n);
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
}

export default Factory;