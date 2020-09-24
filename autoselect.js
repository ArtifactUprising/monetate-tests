(function() {
	try {
	    var option = document.getElementById("option-6959");
	    var formField = false;
	    if (option.parentNode && option.parentNode.parentNode) {
	    	formField = option.parentNode.parentNode;
	    }
	    function albumSize() {
			option.click();
	    }
	    if (option && formField) {
	        albumSize();
	    }
	} catch (e) {
	    console.log(e);
	}
}());
