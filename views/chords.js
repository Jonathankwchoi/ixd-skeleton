'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$(".names").click(anagrammedName);
}

var changedKey = document.getElementById('changed');
function listQ(){
    changedText.textContent = this.value;
}
document.getElementById("list").onchange = listQ;