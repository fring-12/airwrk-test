var maxProfit = function (prices) {
  var max = 0;
  var left = 0;
  var right = 1;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      max = Math.max(profit, max);
      right++;
    } else {
      left = right;
      right++;
    }
  }
  return max;
};

console.log("result", maxProfit([7, 1, 5, 3, 6, 4]));
