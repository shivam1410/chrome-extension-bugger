localStorage.setup === 'true'

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if ( request.todo === "showPageAction") {
        chrome.tabs.query({active:true, currentWindow: true}, tabs =>{
            chrome.pageAction.show(tabs[0].id)
        }
        );
    }
});

chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
      if (changeInfo.url) {
        chrome.tabs.sendMessage( tabId, {
          message: 'urlChanged',
          url: changeInfo.url
        })
      }
    }
  );

chrome.runtime.onMessage.addListener((msg, sender) => {
    // First, validate the message's structure.
    if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
      // Enable the page-action for the requesting tab.
      chrome.pageAction.show(sender.tab.id);
    }
});