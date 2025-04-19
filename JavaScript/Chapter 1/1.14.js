function firstDenomination(kindsOfCoins) {
  const denominations = [1, 5, 10, 25, 50];
  return denominations[kindsOfCoins - 1];
}

function countChange(amount) {
  function cc(a, n) {
    if (a < 0) {
      return 0;
    }
    if (a === 0) {
      return 1;
    }
    if (n === 0) {
      return 0;
    }

    const waysWithoutNthCoin = cc(a, n - 1);
    const waysWithNthCoin = cc(a - firstDenomination(n), n);

    return waysWithoutNthCoin + waysWithNthCoin;
  }

  return cc(amount, 5);
}

console.log(countChange(11));

// Steps: O(n^5)
// Spaces: O(n)
