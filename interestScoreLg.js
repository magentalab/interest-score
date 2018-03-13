intSc_Lg = function() {
	var count = user.getLocal('intScCount_Lg');
	if(count == null) {
		count = 0;
	}
	else {
		count = parseFloat(count);
	}
	var dayN = (Date.now() / 86400000);
	var dayL = user.getLocal('intScDays_Lg');
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
	if(curPage.indexOf("lg") > -1) {
		count = count + 1;
		session = parseInt(profile.sessionCount);
		user.setLocal('intScSession_Lg', session);
		user.setLocal('intScDays_Lg', dayN);
		if(HLC == 0) {count = 1;} else {count = HLC * count;}
		user.setLocal('intScCount_Lg', count);
		HLC = 1;
	} else {
		session = user.getLocal('intScSession_Lg');
		if(session == null) {
			session = 0;
		}
		else {
			session = parseInt(session);
		}
	}
	return HLC * (count * session);
};
return intSc_Lg();