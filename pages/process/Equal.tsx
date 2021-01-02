import Operator from './Operator'

class Equal extends Operator {
  protected value: string = '=';

  public toString(): string {
    return this.next !== null ? this.next.toString() : '';
  }

  public execute(n: number): number {
    if(this.hasNext() === true) return this.next.execute(n);
    return n;
  }
}

export default Equal;