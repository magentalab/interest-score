intSc_Galaxy = function() {
	var count = user.getLocal('intScCount_Galaxy');
	if(count == null) {
		count = 0;
	}
	else {
		count = parseFloat(count);
	}
	var dayN = (Date.now() / 86400000);
	var dayL = user.getLocal('intScDays_Galaxy');
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
	if(curPage.indexOf("galaxy") > -1) {
		count = count + 1;
		session = parseInt(profile.sessionCount);
		user.setLocal('intScSession_Galaxy', session);
		user.setLocal('intScDays_Galaxy', dayN);
		if(HLC == 0) {count = 1;} else {count = HLC * count;}
		user.setLocal('intScCount_Galaxy', count);
		HLC = 1;
	} else {
		session = user.getLocal('intScSession_Galaxy');
		if(session == null) {
			session = 0;
		}
		else {
			session = parseInt(session);
		}
	}
	return HLC * (count * session);
};
return intSc_Galaxy();