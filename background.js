chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "SAVE_PRICES") {
        chrome.storage.local.set({ extractedPrices: message.data }, () => {
            console.log("Prices saved to chrome.storage.local");
            sendResponse({ success: true }); // Let sender know it's done
        });
        return true; // Keep service worker alive for async sendResponse
    }
});
