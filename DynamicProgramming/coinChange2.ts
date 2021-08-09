// With a given set of coins, find the amount of different combinations it would take to achieve
// a specified amount. For example, given values [1, 5, 10], find ow many ways there are to achieve
// a value of 12

function coinChange(coins: number[], value: number): number {
  if (coins.length === 0 || value <= 0) return 0;

  let dynArray = [];
  coins.unshift(0); // adding a zero coin to the coins array, because we need to check using no coins first

  // We find the combinations for each value using no coins, if making 0, use no coins (1 way),
  // if making any amount greater than zero, there are 0 ways to do so (because we are using no coins)
  for (let j = 0; j <= value; j++) {
    if (j === 0) {
        dynArray[0] = [1];
    } else {
        dynArray[0].push(0);
    }
  }

  for(let i = 1; i < coins.length; i++) {
    for (let j = 0; j <= value; j++) {
      // There is only one way ot make an amount of 0 for any given set of coins, and that is to use zero coins
      if (j === 0) {
        dynArray[i] = [1];
      } else if (j < coins[i]) {
        // Cannot use given coin because it is too large, so use the other coins (so use stored answer)
        dynArray[i][j] = dynArray[i - 1][j];
      } else {
        // Can use coin, so use the coin, find how much is left when doing j - coin value = leftOver,
        // find the previous answer at [i][leftOver],
        // and then add that value to the previous value using only the other coins
        dynArray[i][j] = dynArray[i - 1][j] + dynArray[i][j - coins[i]];
      }
    }
  }

  return dynArray[coins.length - 1][value];
}
