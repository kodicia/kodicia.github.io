document.addEventListener('DOMContentLoaded', function(){
	var masternode = getURL(window.location.search.substring(1)).masternode;
	if(getCookie("node") === null){
    if(masternode){
      setCookie("node", masternode, 365);
      localStorage.setItem("masternode", masternode);
    }else{
      setCookie("node", "0x1F34500957937344458Da2862Dc74Aeecc9E3262", 365);
      localStorage.setItem("masternode", "0x1F34500957937344458Da2862Dc74Aeecc9E3262");
    }
  }else{
    localStorage.setItem("masternode", getCookie("node"));
  }
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    var caLength = ca.length;
    for(var i = 0; i < caLength; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function getURL(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}