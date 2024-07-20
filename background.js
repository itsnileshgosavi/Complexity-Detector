chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "contentScriptExecuted") {
      chrome.action.setBadgeText({ text: "✅", tabId: sender.tab.id });
      
    }
  });