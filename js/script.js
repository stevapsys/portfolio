function popupOpenClose(popup) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper").length == 0){
		$(popup).wrapInner("<div class='wrapper'></div>");
	}
	
	/* Open popup */
	 $(popup).show() 
	



	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			
			}
		}
	});

	/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popup).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open]").on("click", function() {
		popupOpenClose($(".popup"));
	});
});

	/* Segundo popup */

function popupOpenClose(popupdois) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper").length == 0){
		$(popupdois).wrapInner("<div class='wrapperdois'></div>");
	}
	
	/* Open popup */
	$(popupdois).show();

	/* Close popup if user clicks on background */
	$(popupdois).click(function(e) {
		if ( e.target == this ) {
			if ($(popupdois).is(':visible')) {
				$(popupdois).hide();
			}
		}
	});

	/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popupdois).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popupdois).hide();
	});
}

$(document).ready(function () {
	$("[data-js=opendois]").on("click", function() {
		popupOpenClose($(".popupdois"));
	});
});


	/* Teceiro popup */

function popupOpenClose(popuptres) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrappertres").length == 0){
		$(popuptres).wrapInner("<div class='wrapper'></div>");
	}
	
	/* Open popup */
	$(popuptres).show();

	/* Close popup if user clicks on background */
	$(popuptres).click(function(e) {
		if ( e.target == this ) {
			if ($(popuptres).is(':visible')) {
				$(popuptres).hide();
			}
		}
	});

	/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popuptres).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popuptres).hide();
	});
}

$(document).ready(function () {
	$("[data-js=opentres]").on("click", function() {
		popupOpenClose($(".popuptres"));
	});
});



