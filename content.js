let ccode='';

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === "getCode") {     
    try {
       
        sendResponse({ code: ccode });
     
      
    } catch (error) {
      console.error('Failed to retrieve code:', error);
    }
  }
  if (request.action === 'runFunction') {
    getCode((code) => {
      console.log(code);
      ccode=code;
    });
  }
  return true;
});

function getCode(callback) {
  var script = document.createElement('script');
  script.src = chrome.runtime.getURL('injectedScript.js');
  script.id = 'tmpScript';

  script.onload = function() {
    console.log('Injected script loaded');
    // Read the code from the data attribute
    var codeElement = document.getElementById('codeContainer');
    if (codeElement) {
      var code = codeElement.getAttribute('data-code');
      
      callback(code);
    } else {
      console.error('Code container element not found');
    }
    // Clean up
    document.body.removeChild(script);
  };

  script.onerror = function() {
    console.error('Failed to load injected script');
  };

  document.body.appendChild(script);
  console.log('Script injected into page');
}
