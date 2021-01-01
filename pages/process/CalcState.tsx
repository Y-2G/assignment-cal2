import Queue from '../data/Queue';

type CalcState = {
  result: string,
  queue: Queue,
  history: Queue[],
}

export default CalcState;