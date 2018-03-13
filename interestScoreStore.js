intSc_Store = function() {
	var count = user.getLocal('intScCount_Store');
	if(count == null) {
		count = 0;
	}
	else {
		count = parseFloat(count);
	}
	var dayN = (Date.now() / 86400000);
	var dayL = user.getLocal('intScDays_Store');
	if(dayL == null) {
		dayL = dayN;
	}
	else {
		dayL = parseFloat(dayL);
	}
	var dayS = Math.floor(dayN - dayL);
	var HLC = 0;
	if(dayS < 14) {
		HLC = (14 - dayS) / 14; 
	}
	var session;
	var curPage = page.url.toLowerCase();
	if(curPage.indexOf("/store-locator") > -1) {
		count = count + (1 * .5);
		session = parseInt(profile.sessionCount);
		user.setLocal('intScSession_Store', session);
		user.setLocal('intScDays_Store', dayN);
		if(HLC == 0) {count = 1;} else {count = HLC * count;}
		user.setLocal('intScCount_Store', count);
		HLC = 1;
	} else {
		session = user.getLocal('intScSession_Store');
		if(session == null) {
			session = 0;
		}
		else {
			session = parseInt(session);
		}
	}
	return HLC * (count * session);
};
return intSc_Store();