function popupOpenClose(popupDois) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper").length == 0){
		$(popupdois).wrapInner("<div class='wrapper'></div>");
	}
	
	/* Open popupdois */
	$(popupdois).show();

	/* Close popupdois if user clicks on background */
	$(popupdois).click(function(e) {
		if ( e.target == this ) {
			if ($(popupdois).is(':visible')) {
				$(popupdois).hide();
			}
		}
	});

	/* Close popupdois and remove errors if user clicks on cancel or close buttons */
	$(popupdois).find("button[name=closedois]").on("click", function() {
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


