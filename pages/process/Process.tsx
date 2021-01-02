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

  public getValue(): any {
    return this.value;
  }

  public toString(): string {
    return this.value + (this.next !== null ? this.next.toString() : '');
  }

  public abstract start(): any;

  public abstract execute(n: number): number;

}

export default Process;