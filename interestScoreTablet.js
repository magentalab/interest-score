intSc_Tablet = function() {
	var count = user.getLocal('intScCount_Tablet');
	if(count == null) {
		count = 0;
	}
	else {
		count = parseFloat(count);
	}
	var dayN = (Date.now() / 86400000);
	var dayL = user.getLocal('intScDays_Tablet');
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
	var crpg = page.url.toLowerCase();
	if(crpg.indexOf("ipad") > -1 || crpg.indexOf("tablet") > -1 || crpg.indexOf("galaxy-tab") > -1) {
		count = count + 1;
		session = parseInt(profile.sessionCount);
		user.setLocal('intScSession_Tablet', session);
		user.setLocal('intScDays_Tablet', dayN);
		if(HLC == 0) {count = 1;} else {count = HLC * count;}
		user.setLocal('intScCount_Tablet', count);
		HLC = 1;
	} else {
		session = user.getLocal('intScSession_Tablet');
		if(session == null) {
			session = 0;
		}
		else {
			session = parseInt(session);
		}
	}
	return HLC * (count * session);
};
return intSc_Tablet();