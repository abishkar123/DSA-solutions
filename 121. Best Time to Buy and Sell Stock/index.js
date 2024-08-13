**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min_price = Infinity;
    let max_profit = 0;

    for (let price of prices) {
        if (price < min_price) {
            min_price = price;
        }

        let profit = price - min_price;

        if (profit > max_profit) {
            max_profit = profit;
        }
    }

    return max_profit;
    
};