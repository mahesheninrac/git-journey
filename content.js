(function () {
    const delay = 1500; // Wait for page content to load

    setTimeout(() => {
        const prices = [];
        const priceElements = document.querySelectorAll('td'); // Adjust selector

        priceElements.forEach(el => {
            const text = el.textContent.replace(/[₹,]/g, '').trim();
            const num = parseFloat(text);
            if (!isNaN(num)) prices.push(num);
        });

        if (prices.length >= 2) {
            chrome.runtime.sendMessage({ type: "SAVE_PRICES", data: prices }, response => {
                if (response && response.success) {
                    console.log("✅ Prices sent and saved.");
                }
            });
        } else {
            console.log("⚠️ No valid prices found.");
        }
    }, delay);
})();
