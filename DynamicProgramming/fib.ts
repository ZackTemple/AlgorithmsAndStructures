function fib(n: number, memo = []): number {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;

  let result = fib(n - 1) + fib(n - 2);
  memo[n] = result;

  return result;
}

// Tabulation: working from the ground up
function fibTabulation(n: number): number {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNums[n] = fibNums[n - 1] + fibNums[n - 2];
  }

  return fibNums[n];
}
