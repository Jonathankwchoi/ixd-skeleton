'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#key').change(changeChord);

	// $('#colorBtn').click(randomizeColors);
}

function changeChord(response) {
    console.log(response);
    console.log("You changed the chord");
}