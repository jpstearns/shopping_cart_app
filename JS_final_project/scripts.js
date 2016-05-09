//varialbes
var guitarDescription = document.getElementById("guitardescription");
var guitarSpecs = document.getElementById("guitarspecs");
var guitarDlink = document.getElementById("guitarDlink");
var guitarSlink = document.getElementById("guitarSlink");
var pedalDescription = document.getElementById("pedaldescription");
var pedalSpecs = document.getElementById("pedalspecs");
var pedalDlink = document.getElementById("pedalDlink");
var pedalSlink = document.getElementById("pedalSlink");

var ampDescription = document.getElementById("ampdescription");
var ampSpecs = document.getElementById("ampspecs");
var ampDlink = document.getElementById("ampDlink");
var ampSlink = document.getElementById("ampSlink");

//set description variables as active tabs
guitarDlink.style.background="orange";
pedalDlink.style.background="orange";
ampDlink.style.background="orange";

var showGspecs = function(){
	guitarDescription.style.display="none";
	guitarSpecs.style.display="block";
	guitarSlink.style.background="orange";
	guitarDlink.style.background="black"
}

var showGdescription = function(){
	guitarDescription.style.display="block";
	guitarSpecs.style.display="none";
	guitarDlink.style.background="orange";
	guitarSlink.style.background="black";
}
var showPspecs = function(){
	pedalDescription.style.display="none";
	pedalSpecs.style.display="block";
	pedalSlink.style.background="orange";
	pedalDlink.style.background="black"
}

var showPdescription = function(){
	pedalDescription.style.display="block";
	pedalSpecs.style.display="none";
	pedalDlink.style.background="orange";
	pedalSlink.style.background="black";
}
var showAspecs = function(){
	ampDescription.style.display="none";
	ampSpecs.style.display="block";
	ampSlink.style.background="orange";
	ampDlink.style.background="black"
}

var showAdescription = function(){
	ampDescription.style.display="block";
	ampSpecs.style.display="none";
	ampDlink.style.background="orange";
	ampSlink.style.background="black";
}

var scaleGuitar= function(factor){

	var width = document.getElementById("guitarImg").clientWidth;
	var height = document.getElementById("guitarImg").clientHeight;
	
	width = width * factor;
	height = height * factor;

	width = width + "px";
	height= height + "px";
	document.getElementById("guitarImg").style.width =width;
	document.getElementById("guitarImg").style.height= height;
}
var scalePedal= function(factor){

	var width = document.getElementById("pedalImg").clientWidth;
	var height = document.getElementById("pedalImg").clientHeight;
	
	width = width * factor;
	height = height * factor;

	width = width + "px";
	height= height + "px";
	document.getElementById("pedalImg").style.width =width;
	document.getElementById("pedalImg").style.height= height;
}
var scaleAmp= function(factor){

	var width = document.getElementById("ampImg").clientWidth;
	var height = document.getElementById("ampImg").clientHeight;
	
	width = width * factor;
	height = height * factor;

	width = width + "px";
	height= height + "px";
	document.getElementById("ampImg").style.width =width;
	document.getElementById("ampImg").style.height= height;
}

var addGuitar = function(){
	var qty = document.getElementById("guitarQty").value;
	if(qty > 0){
		setCookie("guitar", qty, 30);
	}
	else{
		alert("Please Enter A Valid Quantity");
	}
	document.getElementById("guitarQty").value = "";
}

var addPedal = function(){
	var qty = document.getElementById("pedalQty").value;
	if(qty > 0){
		setCookie("pedal", qty, 30);
	}
	else{
		alert("Please Enter A Valid Quantity");
	}
	document.getElementById("pedalQty").value = "";
}

var addAmp = function(){
	var qty = document.getElementById("ampQty").value;
	if(qty > 0){
		setCookie("amp", qty, 30);
	}
	else{
		alert("Please Enter A Valid Quantity");
	}
	document.getElementById("ampQty").value = "";
}
window.onload = function(){ 
	/*Product Modals*/
	var guitarModal = document.getElementById('guitarModal');
	var pedalModal = document.getElementById('pedalModal');
	var ampModal = document.getElementById('ampModal');

	// Get the button that opens the modals
	var guitarButton = document.getElementById("guitarButton");
	var pedalButton = document.getElementById("pedalButton");
	var ampButton = document.getElementsByClassName("ampButton");

	// Get the <span> element that closes the modal
	var span1 = document.getElementsByClassName("close")[0];
	var span2 = document.getElementsByClassName("close")[1];
	var span3 = document.getElementsByClassName("close")[2];

	// When the user clicks on the button, open the modal 
	guitarButton.onclick = function() {
	    guitarModal.style.display = "block";
	}

	pedalButton.onclick = function(){
		pedalModal.style.display = "block";
	}

	ampButton.onclick = function(){
		ampModal.style.display = "block";
	}
	// When the user clicks on <span> (x), close the modal
	span1.onclick = function() {
	    guitarModal.style.display = "none";
	}
	span2.onclick = function() {
	    pedalModal.style.display = "none";
	}
	span3.onclick = function(){
		ampModal.style.display = "none";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == guitarModal) {
	        guitarModal.style.display = "none";
	    }
	    if(event.target == pedalModal){
	    	pedalModal.style.display="none";
	    }
	    if(event.target == ampModal){
	    	ampModal.style.display="none"
	    }
	}
};

/*Cookie Data Storage*/
function setCookie ( cookiename, cookievalue, lifespan){
  document.cookie = cookiename + "=" + encodeURIComponent( cookievalue ) +
      "; max-age=" + 60 * 60 * 24 * lifespan;
}
