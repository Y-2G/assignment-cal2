import React from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import Process from './Process'
import ClickPlusButton from './ClickPlusButton'
import ClickNumberButton from './ClickNumberButton'
import ClickEqualButton from './ClickEqualButton'

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Calculator</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Calculator></Calculator>
  </div>
)

type IState = {
  process: string,
  result: string,
  history: number[],
  stac: Process[]
}

class Calculator extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      process: '',
      result: '0',
      history: [],
      stac: []
    };
  }

  async saveNum() {
    const display = Number(this.state.result);
    const process = new ClickNumberButton(display);

    const stac = this.state.stac.slice();
    const last = stac.length - 1;

    if(last >= 0) stac[last].setNext(process);
    stac.push(process);

    await this.setState({
      stac: stac
    });
  }

  async savePlus() {
    const process = new ClickPlusButton();

    const stac = this.state.stac.slice();
    const last = stac.length - 1;

    if(last >= 0) stac[last].setNext(process);
    stac.push(process);

    this.setState({
      stac: stac
    });
  }

  async saveEqual() {
    const process = new ClickEqualButton();

    const stac = this.state.stac.slice();
    const last = stac.length - 1;

    if(last >= 0) stac[last].setNext(process);
    stac.push(process);

    this.setState({
      stac: stac
    });
  }

  async clickPlusButton() {
    await this.saveNum();
    await this.savePlus();
    this.setState({ result: '0' });
  }

  async clickEqualButton() {
    await this.saveNum();
    await this.saveEqual();

    const process = this.state.stac[0];
    const inum = process.start();
    const result = String(inum.getNumber());

    console.log(this.state.stac)
    this.setState({
      result: result,
      stac: []
    });
  }

  clickClearButton(): void {
    this.setState({ process: '' });
  }

  clickNumberButton(i: number): void {
    const result = String(Number(this.state.result.concat(String(i))));
    this.setState({ result: result });
  }

  render() {
    return (
      <div className={styles.container}>
        <Display process={this.state.process} result={this.state.result} />
        <div className={styles.row}>
          <div className={styles.cell25}>
            <Button text="C" handleClick={() => this.clickClearButton()} />
          </div>
          <div className={styles.cell25} />
          <div className={styles.cell25} />
          <div className={styles.cell25}>
            <Button text="/" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell25}>
            <Button text="7" handleClick={() => this.clickNumberButton(7)} />
          </div>
          <div className={styles.cell25}>
            <Button text="8" handleClick={() => this.clickNumberButton(8)} />
          </div>
          <div className={styles.cell25}>
            <Button text="9" handleClick={() => this.clickNumberButton(9)} />
          </div>
          <div className={styles.cell25}>
            <Button text="*" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell25}>
            <Button text="4" handleClick={() => this.clickNumberButton(4)} />
          </div>
          <div className={styles.cell25}>
            <Button text="5" handleClick={() => this.clickNumberButton(5)} />
          </div>
          <div className={styles.cell25}>
            <Button text="6" handleClick={() => this.clickNumberButton(6)} />
          </div>
          <div className={styles.cell25}>
            <Button text="-" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell25}>
            <Button text="1" handleClick={() => this.clickNumberButton(1)} />
          </div>
          <div className={styles.cell25}>
            <Button text="2" handleClick={() => this.clickNumberButton(2)} />
          </div>
          <div className={styles.cell25}>
            <Button text="3" handleClick={() => this.clickNumberButton(3)} />
          </div>
          <div className={styles.cell25}>
            <Button text="+" handleClick={() => this.clickPlusButton()} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell50}>
            <Button text="0" handleClick={() => this.clickNumberButton(0)} />
          </div>
          <div className={styles.cell25}>
            <Button text="." />
          </div>
          <div className={styles.cell25}>
            <Button text="=" handleClick={() => this.clickEqualButton()} />
          </div>
        </div>
      </div>
    );
  }
}

function Display(props) {
  return (
    <div className={styles.display}>
      <div className={styles.process}>{props.process}</div>
      <div className={styles.result}>{props.result}</div>
    </div>
  );
}

function Controller(props) {
  const rows = [];
  for(let i = 0; i < 5; i++) {
    rows.push(<Row count={i} />);
  }
  return {rows}
}

function Row(props) {
  return (
    <div className={styles.row}>
      {props.children}
    </div>
  )
}

function Cell(props) {
  return (
    <div className={styles.cell}>
      {props.children}
    </div>
  );
}

function Button(props) {
  return (
    <button className={styles.button}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

export default Home