// MemoryGame Component Testing Module

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MemoryGame from '../components/MemoryGame';

describe('MemoryGame', () => {
	it('creates a new set of cards on render', async () => {
		let startGame = 4;
		let count = 0;
		let wins = 0;
		const setStartGame = (value) => { startGame = value; };
		const setCount = (value) => { count = value; };
		const setWins = (value) => { wins = value; };
		render(<MemoryGame
			startGame={startGame}
			setStartGame={setStartGame}
			setCount={setCount}
			setWins={setWins}
		/>
		);
		const memoryGameElement = await screen.getByTestId('memoryGame');
		expect(memoryGameElement.children.length).toBe(4);
	});
});
