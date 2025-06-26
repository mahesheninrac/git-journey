document.getElementById("analyzeBtn").addEventListener("click", () => {
    chrome.storage.local.get(["extractedPrices"], (result) => {
        const priceArray = result.extractedPrices;

        if (!priceArray || priceArray.length < 2) {
            document.getElementById("result").innerText = "Please enter or extract valid prices.";
            return;
        }

        const resultData = maxProfitWithDays(priceArray);
        document.getElementById("result").innerHTML = `
  <p> <span class="highlight">Buy on Day ${resultData.buyDay + 1}</span> at <strong>${resultData.buyPrice}</strong></p>
  <p> <span class="highlight">Sell on Day ${resultData.sellDay + 1}</span> at <strong>${resultData.sellPrice}</strong></p>
  <p> <span class="highlight">Profit:</span> ${resultData.maxProfit}</p>
`;

    });
});

function maxProfitWithDays(prices) {
    let minPrice = Infinity, minIndex = -1;
    let maxProfit = 0, buyDay = -1, sellDay = -1;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
            minIndex = i;
        } else {
            let profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
                buyDay = minIndex;
                sellDay = i;
            }
        }
    }

    return {
        maxProfit,
        buyDay,
        sellDay,
        buyPrice: prices[buyDay],
        sellPrice: prices[sellDay]
    };
}
