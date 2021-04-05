//The following sort algorithm is an exercise using Queues

import { Queue } from "../Structures/queue";

export function radixSort(array: number[]): number[] {
  const emptyContainerQueue = setupContainerQueue(new Queue());
  const sortedByOnesQueue = sortQueue(array, emptyContainerQueue, Digits.Ones);
  const arraySortedByOnes = queueToArray(sortedByOnesQueue);
  const sortedByTensQueue = sortQueue(arraySortedByOnes, sortedByOnesQueue, Digits.Tens);
  const sortedArray = queueToArray(sortedByTensQueue);

  return sortedArray;
}

function setupContainerQueue(queue: Queue<Queue<Number>>): Queue<Queue<Number>> {
  for(let i = 0; i <= 9; i++) {
    queue[i] = new Queue();
  }
  return queue;
}

function sortQueue(array: number[], queue: Queue<Queue<Number>>, digits: Digits): Queue<Queue<Number>> {
  const sortedByOnes = digits === Digits.Ones;
  array.forEach(element => {
    const queueNumber = sortedByOnes ? sortForOnes(element) : sortForTens(element);
    queue[queueNumber].enqueue(element);
  });
  return queue;
}

function queueToArray(queue: Queue<Queue<Number>>): number[] {
  const array = [];
  for(let i = 0; i <= 9; i++) {
    while(queue[i].peek() !== undefined) {
      array.push(queue[i].dequeue())
    }
  }
  return array;
}

enum Digits {
  Ones = "Ones",
  Tens = "Tens"
}

const sortForOnes = (element: number) => element % 10;
const sortForTens = (element: number) => Math.floor(element / 10);
