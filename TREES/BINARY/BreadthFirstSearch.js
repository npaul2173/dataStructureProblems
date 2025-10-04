// Breadth First Search in JavaScript

// Graph represented as adjacency list
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"],
};

// BFS function
function bfs(start) {
  const visited = new Set(); // To keep track of visited nodes
  const queue = [start]; // Start with the given node
  const result = []; // To store the order of traversal

  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift(); // Take first element from queue
    result.push(node);

    // Explore all neighbors
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}

// Run BFS from node "A"
console.log("BFS Traversal:", bfs("B"));
