var cookieName = 'videoPAS_session';
var cookieValue = 'nepasreafficher';

window.getCookie = function(name) {
  match = document.cookie.match(new RegExp(name + '=([^;]+)'));
  if (match) return match[1];
}

if (!getCookie(cookieName)) {
	var expiration = (new Date()).getTime() + 31;
	document.cookie = cookieName +'='+ cookieValue +'; expires='+ expiration+'; path=/';
	var modal = document.getElementById('prehome-modal');
	modal.parentNode.removeChild(modal);
}