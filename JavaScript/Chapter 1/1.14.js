function firstDenomination(kindsOfCoins) {
  if (kindsOfCoins === 1) {
    return 1;
  } else if (kindsOfCoins === 2) {
    return 5;
  } else if (kindsOfCoins === 3) {
    return 10;
  } else if (kindsOfCoins === 4) {
    return 25;
  } else if (kindsOfCoins === 5) {
    return 50;
  } else {
    return 0;
  }
}

function countChange(amount) {
  function cc(a, n) {
    if (a < 0) {
      return 0;
    } else if (a === 0) {
      return 1;
    } else if (n === 0) {
      return 0;
    } else {
      const waysWithoutNthCoin = cc(a, n - 1);
      const waysWithNthCoin = cc(a - firstDenomination(n), n);

      return waysWithoutNthCoin + waysWithNthCoin;
    }
  }
  return cc(amount, 5);
}

countChange(11); // 4

// Steps: O(n^5)
// Spaces: O(n)
