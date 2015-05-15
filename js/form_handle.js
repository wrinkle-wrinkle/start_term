document.getElementById("stinput").addEventListener("change", function() {
    var inp = document.getElementById("stinput");
    var selinp = inp.options[inp.selectedIndex].value;
    var myform = document.getElementById("myform");

    if (selinp == "google") {
        myform.setAttribute("action", "http://www.google.com/search");
        //document.getElementById("inpbox").value = "";
        //document.getElementById("edibox").value = "";
        document.getElementById("inpbox").className = "search";
        document.getElementById("edibox").className = "search_dis";
    } else if (selinp == "youtube") {
        myform.setAttribute("action", "http://www.youtube.com/results");
        //document.getElementById("inpbox").value = "";
        //document.getElementById("edibox").value = "";
        document.getElementById("inpbox").className = "search";
        document.getElementById("edibox").className = "search_dis";
    } else if (selinp == "edit") {
        //document.getElementById("inpbox").value = "";
        //document.getElementById("edibox").value = "";
        document.getElementById("inpbox").className = "search_dis";
        document.getElementById("edibox").className = "search";
    }
},false);

document.getElementById("edform").addEventListener("submit", function(evt) {
    evt.preventDefault();
    edit_com = document.getElementById("edibox").value;
    
    try {
    var com = JSON.parse(edit_com);
    
    if (parseInt(com.pid) < 11) {
        document.getElementById("links").rows[parseInt(com.pid)].cells[1].innerHTML = com.cat;
        var site = '<a href='+com.url+'>'+com.site+'</a>';
        document.getElementById("links").rows[parseInt(com.pid)].cells[2].innerHTML = site;
        var url = '<a href='+com.url+'>'+com.url+'</a>';
        document.getElementById("links").rows[parseInt(com.pid)].cells[3].innerHTML = url;
        
        chrome.storage.sync.get("sync_links", function (obj) {
            obj.sync_links[parseInt(com.pid)-1] = com;
            chrome.storage.sync.set({sync_links: obj.sync_links});
        });
        document.getElementById("edibox").value = "";
    } else if (parseInt(com.pid) >= 11) {
        alert("The PID must be 10 or below");
    } 
    } catch(err) {
        overlay();
        document.getElementById("edibox").value = "";
    }
},false);

document.getElementById("pop_close").addEventListener("click", function() {
    overlay();
},false);