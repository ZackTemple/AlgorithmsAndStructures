class UndirectedGraph {
  adjacencyList = {};

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex: string) {
    if (this.adjacencyList[vertex]) {
      const adjacentVertices = this.adjacencyList[vertex];
      // Since it's undirected, we only need to loop through adjacent vertices of {vertex} being deleted,
      // because they are the only connections with {vertex}
      for (let i = 0; i < adjacentVertices.length; i++) {
        this.removeEdge(vertex, adjacentVertices[i]);
      }

      delete this.adjacencyList[vertex];
    }
  }

  addEdge(vertex1: string, vertex2: string) {
    // Both vertices must exist before making a connection (edge) between the two
    if (!this.adjacencyList[vertex1]) throw Error(`${vertex1} does not exist in our graph`);
    if (!this.adjacencyList[vertex2]) throw Error(`${vertex2} does not exist in our graph`);

    // Only add edge if edge does not exist
    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
  }


  DFSRecursive(start: string): string[] {
    let results = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    function traverseGraph(vertex: string): string[] {
      if (!vertex) return null;

      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return traverseGraph(neighbor);
      })
    }

    traverseGraph(start);

    return results;
  }

  DFSIterative(start: string): string[] {
    let stack = [];
    let result = [];
    let visited = {};
    let currentVertex: string;

    stack.push(start);
    visited[start] = true;
    while (stack.length > 0) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  BFS(start: string): string[] {
    let result = [];
    let queue = [];
    let visited = {};
    let currentVertex;

    queue.push(start);
    visited[start] = true;

    while(queue.length > 0) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}
