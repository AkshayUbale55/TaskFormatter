chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "fetchData") {
      fetch(request.url)
        .then((response) => response.text())
        .then((data) => sendResponse({ data }))
        .catch((error) => sendResponse({ error }));
      return true;
    }
  });
  