function getGreetingTime () {
	var d = new Date(),
		t = d.getHours();

	if( t < 5 ) {
		return 'Still awake?';
	}
	if( t >= 5 && t < 12 ) {
		return 'Good morning!';
	}
	if( t >= 12 && t < 17 ) {
		return 'Good afternoon!';
	}
	if( t >= 17 ) {
		return 'Good evening!';
	}
}
