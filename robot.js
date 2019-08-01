var url = window.location.href;
var res = window.location.href.split("?")
var res2 = res[1].split("=")
const code = res2[1]


chrome.storage.local.set({code: code},res=>console.log("hello there") );
chrome.storage.local.get(['code'], function(result) {
    window.close();
});

