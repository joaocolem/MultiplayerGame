'use strict';

const moveDistance = 10;
const isBrowser = typeof window !== 'undefined';

let player = {};
let moveHorizontal = 0;
let moveVertical = 0;

if(isBrowser) {
	console.log('you are on the browser');
	player = document.querySelector('.player');
}

const movePlayer = {
	w(player) {
		moveVertical -= moveDistance;
		player.style.top = moveVertical + "px";
	},
	d(player) {
		moveHorizontal += moveDistance;
		player.style.left = moveHorizontal + "px";
	},
	s(player) {
		moveVertical += moveDistance;
		player.style.top = moveVertical + "px";
	},
	a(player) {
		moveHorizontal -= moveDistance;
		player.style.left = moveHorizontal + "px";
	},
}

if(isBrowser) {
	document.addEventListener("keydown", function (event) {
		if(movePlayer[event.key]) movePlayer[event.key](player);
	});
};

if(!isBrowser) {
	module.exports = {
		movePlayer,
	};
}
