_satellite.pushBlockingScript(function(event, target, $variables){
  var loc = window.location.href ;
var ref = document.referrer ;

//console.log('setFbInstantXp [LOG] Referrer : ' + ref) ;

var n = 0;
var m = 0;
var patloc = /instant_experiences_enabled=true/;
var param = 0;

// test localStorage
if (localStorage) {
	paramfb = localStorage.getItem("fbref");
	paramfb = localStorage.getItem("igref");
}

// only on fb refeffer
if (ref.search('facebook') > 0) {
	try {
		// storage not defined yet
		if (param != 1) {
				localStorage.setItem("fbref", 1);
			} else {
				localStorage.setItem("fbref", 0);
			}
	} catch (error) {
		//console.log('setFbInstantXp [LOG] ' + error.message) ;
		//console.log(error.message) ;
	}
} else if (ref.search('instagram') > 0){
	try {
		// storage not defined yet
		if (param != 1) {
				localStorage.setItem("igref", 1);
			} else {
				localStorage.setItem("igref", 0);
			}
	} catch (error) {
		//console.log('setFbInstantXp [LOG] ' + error.message) ;
		//console.log(error.message) ;
	}
}
});
