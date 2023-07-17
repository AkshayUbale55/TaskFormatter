chrome.runtime.sendMessage({ message: "fetchData", url: window.location.href }, 
function (response) {
    if (response.error) {
      console.error(response.error);
      return;
    }
  
    const data = response.data;
    // Process the fetched data as needed
    console.log(data);
  });
  