var intSc_Highest = function(h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13) {
	var hh = 0; 
	var ht = "None";
	if(h11 > hh) {hh = h11;ht = "Switch";}
	if(h5 > hh) {hh = h5;ht = "Iphone8";}
	if(h6 > hh) {hh = h6;ht = "IphoneX";}
	if(h3 > hh) {hh = h3;ht = "FiftyFivePlus";}
	if(h2 > hh) {hh = h2;ht = "BYOD";}
	if(h4 > hh) {hh = h4;ht = "Galaxy";}
	if(h8 > hh) {hh = h8;ht = "Netflix";}
	if(h1 > hh) {hh = h1;ht = "Budget";}
	if(h9 > hh) {hh = h9;ht = "Prepaid";}
	if(h10 > hh) {hh = h10;ht = "Store";}
	if(h7 > hh) {hh = h7;ht = "Lg";}
	if(h12 > hh) {hh = h12;ht = "Tablet";}
	if(h13 > hh) {hh = h13;ht = "Watch";}
	return ht + "|" + hh;
};
return intSc_Highest(user.get("interestScoreBudget"),user.get("interestScoreBYOD"),user.get("interestScoreFiftyFivePlus"),user.get("interestScoreGalaxy"),user.get("interestScoreIphone8"),user.get("interestScoreIphoneX"),user.get("interestScoreLg"),user.get("interestScoreNetflix"),user.get("interestScorePrepaid"),user.get("interestScoreStore"),user.get("interestScoreSwitch"),user.get("interestScoreTablet"),user.get("interestScoreWatch"));