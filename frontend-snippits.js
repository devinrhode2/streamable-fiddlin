var xhr = new XMLHttpRequest(); // Chrome only.
xhr.open('GET', window.location.href, true);
xhr.onreadystatechange = function ManualReadyStateChange() {
  var resp = xhr.responseText;
  var lastFew = resp.substring(resp.length - 8, resp.length);
  console.error('received bytes! Last few:' + lastFew);
  if (xhr.readyState === 4) {
    console.warn('now jquery fires a callback');
    console.log('HEADERS\n'+xhr.getAllResponseHeaders());
  }
};
xhr.send();


var xhr = new XMLHttpRequest(); // Chrome only.
xhr.open('GET', window.location.href, true);
var resp, lastRespLength, diff;
xhr.onreadystatechange = function ManualReadyStateChange() {
  resp = xhr.responseText;
  if (!lastRespLength) {
    diff = resp;
  } else {
    diff = resp.substring(lastRespLength, resp.length);
  }
  lastRespLength = resp.length;
  
  console.log('data: ' + diff);
  if (xhr.readyState === 4) {
    console.log('HEADERS\n'+xhr.getAllResponseHeaders());
  }
};
xhr.send();