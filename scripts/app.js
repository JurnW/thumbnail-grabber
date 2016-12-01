// Remove focus from input field
function blurInput() {
    document.getElementById('videoURL').blur();
}

// Grab URL from input field
function grabURL() {
    setTimeout("blurInput()", 500);
    document.getElementById('Div1').style.display = 'block';
}

// Grab input, validate input and generate thumbnail URL's
function grabThumbnail() {
    var videoURL = document.getElementById('videoURL').value;
    var re = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = videoURL.match(re);
    
    if (match && match[7].length === 11) {
        //Low Quality (360P)
        low.src = 'http://img.youtube.com/vi/' + match[7] + '/mqdefault.jpg';
        document.getElementById("url_low").value = low.src;
        //Standard Quality (480P)
        standard.src = 'http://img.youtube.com/vi/' + match[7] + '/0.jpg';
        document.getElementById("urlStandard").value = standard.src;
        //HD (720P)
        hd.src = 'http://img.youtube.com/vi/' + match[7] + '/sddefault.jpg'; 
        document.getElementById("urlHD").value = hd.src;
        //Max resolution (1080p and above)
        maxres.src = 'http://img.youtube.com/vi/' + match[7] + '/maxresdefault.jpg';
        document.getElementById("urlMax").value = maxres.src;
    }
}

// Show the DIV with the selected quality
var divs = ["Div1", "Div2", "Div3", "Div4"];
var visibleDivId = null;

function divVisibility(divId) {
  if(visibleDivId === divId) {
    visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}