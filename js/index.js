$(document).ready(function() {

//do the chrome.runtime error thing and if there is no data, then sync the default values
//else get the synced data and use it

storeLinks();




var time = getTime(new Date());
document.getElementById("time").innerHTML = time;

chrome.system.cpu.getInfo(function(info){
   document.getElementById("arch").innerHTML = info.archName;
   document.getElementById("cpu").innerHTML = info.modelName;
   document.getElementById("nump").innerHTML = info.numOfProcessors + ' Processors';
});

chrome.system.memory.getInfo(function(info){
    document.getElementById("cap").innerHTML = info.capacity + ' total';
    document.getElementById("ava").innerHTML = info.availableCapacity + ' used';
    var free = info.capacity - info.availableCapacity;
    document.getElementById("fre").innerHTML = free + ' free';
});

chrome.system.storage.getInfo(function(info){
    var total = 0;
    for (i = 0; i < info.length; i++) {
        total += info[i].capacity;
    }
    total = total/1073741824;
    total = Math.round(total * 100) / 100;
    document.getElementById("hdd").innerHTML = total + 'GB total';
});

chrome.history.search({text: '', maxResults: 4}, function(data){
    data.forEach(function(page) {
        var title = formatTitle(page.title);
        var url   = formatTitle(page.url);

        var linkstab = document.getElementById("links");
        var tr = document.createElement("tr");
        
        var tdi = document.createElement("td");
        var ti  = document.createTextNode("99");
        tdi.appendChild(ti);
        tr.appendChild(tdi);
        
        var tdc = document.createElement("td");
        var tc  = document.createTextNode("History");
        tdc.appendChild(tc);
        tr.appendChild(tdc);
        
        var tds = document.createElement("td");
        var tur = document.createElement("a");
        tur.setAttribute("href", page.url);
        var ts  = document.createTextNode(title);
        tur.appendChild(ts);
        tds.appendChild(tur)
        tr.appendChild(tds);
        
        var tdu = document.createElement("td");
        var tur = document.createElement("a");
        tur.setAttribute("href", page.url);
        var ts  = document.createTextNode(url);
        tur.appendChild(ts);
        tdu.appendChild(tur)
        tr.appendChild(tdu);
        
        linkstab.appendChild(tr);
    });
});

});

function getTime(dat) {
    var h = dat.getHours();
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h-12;
    }
    h = formatTime(h);
    
    var m = formatTime(dat.getMinutes());
    var s = formatTime(dat.getSeconds());
    var time = h+':'+m+':'+s;
    return time;
}

function formatTime(time) {
    if (time < 10) {
        time = '0'+time;
        return time;
    } else {
        return time;
    }
}

function formatTitle(tit) {
    if (tit.length != 0) {
        if (tit.length > 33) {
            return tit.substring(0,30) + "...";
        } else {
            return tit;
        }
    } else {
        return '';
    }
}

function setLinks(data) {
   for (i=0; i < data.length; i++) {
      document.getElementById(parseInt(data[i].pid)).cells[1].innerHTML = data[i].cat;
      var site = '<a href='+data[i].url+'>'+data[i].site+'</a>';
      document.getElementById(parseInt(data[i].pid)).cells[2].innerHTML = site;
      var url = '<a href='+data[i].url+'>'+data[i].url+'</a>';
      document.getElementById(parseInt(data[i].pid)).cells[3].innerHTML = url;
   }
}

function storeLinks() {
   chrome.storage.sync.get("sync_links", function (obj) {
      //chrome.storage.sync.remove("sync_links");
      if (typeof obj.sync_links == "undefined") {
         $.getJSON("links.json", function(st_links) {
            setLinks(st_links);
            chrome.storage.sync.set({sync_links: st_links});
         });
      } else {
         setLinks(obj.sync_links);
      }
   });
}

function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}