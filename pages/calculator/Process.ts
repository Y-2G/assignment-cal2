abstract class Process {
  
  protected value: any = null;

  protected next: Process = null;

  public setNext(p: Process): void {
    if(this.hasNext() === true) this.next.setNext(p);
    if(this.hasNext() === false) this.next = p;
  }
  
  public hasNext(): boolean {
    return this.next !== null;
  }

  public getValue() {
    return this.value;
  }
  
  public toString(): string {
    return this.value + (this.hasNext() === true ? this.next.toString() : '');
  }

  public abstract setNext2(p: Process): void

  public abstract start(): any;

  public abstract execute(n: number): number;

}

export default Process;