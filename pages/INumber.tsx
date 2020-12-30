class INumber {
  private number: number = 0;

  public constructor(n: number = 0) {
    this.number = n;
  }

  public plus(n: number) {
    this.number += n;
  }

  public equal() {
    console.log(this.number);
  }

  public getNumber() {
    return this.number;
  }
}

export default INumber;