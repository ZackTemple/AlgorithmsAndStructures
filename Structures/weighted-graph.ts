class WeigthedGraph {
  adjacencyList = {};

  addVertex(vertex: string): void {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string, weight: number): void {
    if (!this.adjacencyList[vertex1]) throw Error(`${vertex1} does not exist in our graph`);
    if (!this.adjacencyList[vertex2]) throw Error(`${vertex2} does not exist in our graph`);

    const edgeAlreadyExists = this.adjacencyList[vertex1].some(neighbor => {
      neighbor.node = vertex2;
    });

    if (edgeAlreadyExists) {
      this.updateWeights(vertex1, vertex2, weight);
    } else {
      this.adjacencyList[vertex1].push({node: vertex2, weight});
      this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
  }

  updateWeights(vertex1: string, vertex2: string, weight: number): void {
    this.adjacencyList[vertex1].forEach(neighbor => {
      if (neighbor.node === vertex2) neighbor.weight = weight;
    });

    this.adjacencyList[vertex2].forEach(neighbor => {
      if (neighbor.node === vertex1) neighbor.weight = weight;
    });
  }
}
