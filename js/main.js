window.onload = function() {
	var elems = document.getElementsByClassName('services-list-item');

	for(var i = 0; i < elems.length; i++) {
		elems[i].onclick =function () {
			this.classList.toggle('maximize-list-item');
		}
	}
}

