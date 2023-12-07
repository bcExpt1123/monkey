import { isAccessible } from "@/utils/functions";

export default function Home() {
  
  
  function calculate() {
    let visited = new Set(['0,0']), // Set to keep track of visited points, starting with (0, 0)
        queue = [[0, 0]],          // Queue initialized with the starting point (0, 0)
        points = [[0, 0]],
        accessiblePoints = 0,      // Counter for accessible points
        directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // Possible moves: right, down, left, up
  
    while (queue.length > 0) {
      const [x, y]: number[] = queue.shift(); // Dequeues the next point to process
      accessiblePoints++; // Increment the counter as this point is accessible
  
      directions.forEach(direction => {
        const [dx, dy] = direction,
              newX = x + dx,
              newY = y + dy,
              newPoint = `${newX},${newY}`;
  
        if (isAccessible(newX, newY) && !visited.has(newPoint)) {
          visited.add(newPoint); // Mark this new point as visited
          points.push([newX, newY]); // Enqueue the new point for further exploration
          queue.push([newX, newY]); // Enqueue the new point for further exploration
        }
      });
    }
  
    return {accessiblePoints, points};
  }
  
  const result = calculate()
  return (
    <div>
      <p>Total: {result.accessiblePoints}</p>
    </div>
  )
}
