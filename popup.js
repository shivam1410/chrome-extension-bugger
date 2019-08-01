'use strict';

let authButton = document.getElementById('authButton');
authButton.addEventListener("click",githubAuth)
function githubAuth() {

    chrome.tabs.query({
        active: true,
        currentWindow: true
      }, tabs => {

        chrome.tabs.sendMessage(
            tabs[0].id,//sender.tab.id
            {action: 'githubAuth'}
            );
      });
}
