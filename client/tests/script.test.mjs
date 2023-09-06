import { describe, it, beforeEach, afterEach} from 'node:test';
import assert from 'node:assert';

import { movePlayer } from '../src/script.cjs';


let player;

describe('movePlayer', async () => {
	beforeEach(() => {
		player = {
			style: {
				top: '0px',
				left: '0px',
			}
		};
	});

	afterEach(() => {
		player = {};
	});

	it('move up when "w" key is pressed', async () => {
		movePlayer.w(player);
		assert.strictEqual(player.style.top, '-10px');
	});
	
	it('move down when "s" key is pressed', async () => {
		movePlayer.s(player);
		assert.strictEqual(player.style.top, '0px');
	});

	it('move to left when "a" key is pressed', async () => {
		movePlayer.a(player);
		assert.strictEqual(player.style.left, '-10px');
	});
	
	it('move to rigth when "d" key is pressed', async() => {
		movePlayer.d(player);
		assert.strictEqual(player.style.left, '0px');
	});

	it('unsupported key pressed', async () => {
		movePlayer.undefined;
		assert.strictEqual(player.style.top, '0px');
		assert.strictEqual(player.style.left, '0px');
	});
});
