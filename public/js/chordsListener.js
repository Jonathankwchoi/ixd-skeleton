'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});
var currentKey = 'C';
var currentTone = 'Major';
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $('#chordsInfoPopup').toggle();
    $('#creditPopup').toggle();
    $('#key').change(changeChord);
    $('#tone').change(changeChord);
    
    $('#chordsInfoButton').click(toggleInfo);
    $('#chordsHelpButton').click(toggleHelp);

	// $('#colorBtn').click(randomizeColors);
}

function toggleInfo(response) {
    console.log("Clicked info button");
    console.log($('#chordsInfoButton').html());
    //$('#chordsInfoPopup').html('<img src="pictures/chordsInfo.png">');
    // if ($('#chordsInfoPopup').html() === ""){
    $('#chordsInfoPopup').fadeToggle();
    $('#creditPopup').fadeToggle();
    // }
    //alert(pictures/chordsInfo.png);
    ga("send", "event", 'info', 'click');

}

function toggleHelp(response) {
    console.log("Clicked info button");
    console.log($('#chordsInfoButton').html());
    $('#chordsInfoPopup').fadeToggle();
    $('#creditPopup').fadeToggle();
    ga("send", "event", 'help', 'click');

}

function changeChord(response) {
    console.log(response);
    console.log("You changed the chord");
    console.log(response.target.value);
    if (response.target.value == 'A') {
        currentKey = 'A';
    }
    else if (response.target.value == 'B') {
        currentKey = 'B';
    }
    else if (response.target.value == 'C') {
        currentKey = 'C';
    }
    else if (response.target.value == 'D') {
        currentKey = 'D';
    }
    else if (response.target.value == 'E') {
        currentKey = 'E';
    }
    else if (response.target.value == 'F') {
        currentKey = 'F';
    }
    else if (response.target.value == 'G') {
        currentKey = 'G';
    }
    else if (response.target.value == 'Major') {
        currentTone = 'Major';
    }
    else if (response.target.value == 'Minor') {
        currentTone = 'Minor';
    }

    if (currentKey == 'A' && currentTone == 'Major') {
        $('#chordsPicture').html("<img src='pictures/a-chord-open-position.png'>");
    } else if (currentKey == 'B' && currentTone == 'Major') {
        $('#chordsPicture').html("<img src='pictures/b-guitar-chord-2-e1563281732887.jpg'>");
    } else if (currentKey == 'C' && currentTone == 'Major') {
        $('#chordsPicture').html("<img src='pictures/c-chord-open-position.png'>");
    } else if (currentKey == 'D' && currentTone == 'Major') {
        $('#chordsPicture').html("<img src='pictures/d-chord-open-position.png'>");
    } else if (currentKey == 'E' && currentTone == 'Major') {
        $('#chordsPicture').html("<img src='pictures/e-chord-open-position.png'>");
    } else if (currentKey == 'F' && currentTone == 'Major') {
        $('#chordsPicture').html("<img src='pictures/f-chord-open-position.png'>");
    } else if (currentKey == 'G' && currentTone == 'Major') {
        $('#chordsPicture').html("<img src='pictures/g-chord-open-position.png'>");
    } else if (currentKey == 'A' && currentTone == 'Minor') {
        $('#chordsPicture').html("<img src='pictures/a-minor-chord-open-position.png'>");
    } else if (currentKey == 'B' && currentTone == 'Minor') {
        $('#chordsPicture').html("<img src='pictures/b-minor-chord-open-position.png'>");
    } else if (currentKey == 'C' && currentTone == 'Minor') {
        $('#chordsPicture').html("<img src='pictures/c-minor-chord-open-position.png'>");
    } else if (currentKey == 'D' && currentTone == 'Minor') {
        $('#chordsPicture').html("<img src='pictures/d-minor-chord-open-position.png'>");
    } else if (currentKey == 'E' && currentTone == 'Minor') {
        $('#chordsPicture').html("<img src='pictures/e-minor-chord-open-position.png'>");
    } else if (currentKey == 'F' && currentTone == 'Minor') {
        $('#chordsPicture').html("<img src='pictures/f-minor-chord-open-position.png'>");
    } else if (currentKey == 'G' && currentTone == 'Minor') {
        $('#chordsPicture').html("<img src='pictures/g-minor-chord-open-position.png'>");
    }

}