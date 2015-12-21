/*
Author: Daniel Munn <https://github.com/danmunn
Date: 23/05/2012
Forked & Redone: Mark Kalender (Markedagain)
Date: 08/03/2013
*/
// Simple cookie handling from http://stackoverflow.com/a/24103596/692410
function createCookie(name,value) {
	document.cookie = name + "=" + value + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1, c.length);
		}
		if (c.indexOf(nameEQ) == 0){
			return c.substring(nameEQ.length, c.length);
		}
	}
	return null;
}

function initTabs() {
	bindTab('tabtime_questions', '.journal.question,.journal.question-closed');
	bindTab('tabtime_time', '.journal.has-time');
	bindTab('history_private', '.journal.private-notes');
	bindTab('history_comments', '.journal.has-notes');
	bindTab('history_activity', '.journal.has-details');
	bindTab('history_all', '.journal');
	bindTab('history_none', '');
	selectDefaultTab();
}

function bindTab(tab, journal){
	$('#tab-'+tab).click(function(){
		$('.tab-history').removeClass('selected');
		$('#tab-'+tab).addClass('selected');
		if("replaceState" in window.history){
			window.history.replaceState(null,document.title,'?tab='+tab);
		}
		$('.journal').hide();
		$(journal).show();
		createCookie('selected_issue_tab', tab);
	});
}

function selectDefaultTab() {
	var tab = readCookie('selected_issue_tab');
	if(tab != null) {
		var elem = $('#tab-' + tab);
		if(elem) {
			elem.click();
			return;
		}
	}
	$('.tab-history.selected').not('#tab-history_all')[0] && $('.tab-history.selected').not('#tab-history_all')[0].click();
}

$(document).ready(function(){
	initTabs();
});
