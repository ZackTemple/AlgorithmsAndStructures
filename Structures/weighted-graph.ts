import { NodePQ, PriorityQueue } from "./priority-queue";

class WeightedGraph {
  adjacencyList = {};

  addVertex(vertex: string): void {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string, weight: number): void {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }

  Dijkstra(start: string, end: string): string[] {
    let nodes = new PriorityQueue();
    let path = [];
    let previous = {};
    let distances = {};
    let currentSmallestVertex: string;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.data.length > 0) {
      currentSmallestVertex = nodes.dequeue().value;
      if (currentSmallestVertex === end) {
        while (currentSmallestVertex !== null) {
          path.push(currentSmallestVertex);
          currentSmallestVertex = previous[currentSmallestVertex];
        }
        return path.reverse();
      }

      if (currentSmallestVertex || distances[currentSmallestVertex] !== Infinity) {
        // loop over neighboring nodes
        this.adjacencyList[currentSmallestVertex].forEach(neighbor => {
          // find potential new shortest distance from start to the neighboring node of current
          let candidate = neighbor.weight + distances[currentSmallestVertex];

          if (candidate < distances[neighbor.node]) {
            // updating new smallest neighbor distance to neighbor
            distances[neighbor.node] = candidate;
            // updating previous - How we got to neighbor
            previous[neighbor.node] = currentSmallestVertex;
            // enqueue in PQ the neighbor with its new shortest path value
            nodes.enqueue(neighbor.node, candidate);
          }
        });
      }
    }
  }
}
