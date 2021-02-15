function loadJSON(file, callback) {
  const req = new XMLHttpRequest();
  req.open("GET", file, true);
  req.onreadystatechange = function() {
    if(req.readyState === 4 && req.status == 200) {
      callback(JSON.parse(req.responseText));
    }
  }
  req.send();
}