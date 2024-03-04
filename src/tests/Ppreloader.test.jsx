// Preloader Component Testing Module

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Preloader from '../components/Preloader';

describe('Preloader', () => {
	it('changes startGame state when Easy button is clicked', async () => {
		let startGame = 0;
		const user = userEvent.setup();
		const setStartGame = (value) => { startGame += value; };
		render(<Preloader startGame={startGame} setStartGame={setStartGame} />);
		const easyButton = await screen.getByRole('button', { name: 'Easy' });
		await user.click(easyButton);
		expect(startGame).toBe(4);
	});

	it('changes startGame state when Medium button is clicked', async () => {
		let startGame = 0;
		const user = userEvent.setup();
		const setStartGame = (value) => { startGame += value; };
		render(<Preloader startGame={startGame} setStartGame={setStartGame} />);
		const mediumButton = await screen.getByRole('button', { name: 'Medium' });
		await user.click(mediumButton);
		expect(startGame).toBe(8);
	});

	it('changes startGame state when Hard button is clicked', async () => {
		let startGame = 0;
		const user = userEvent.setup();
		const setStartGame = (value) => { startGame += value; };
		render(<Preloader startGame={startGame} setStartGame={setStartGame} />);
		const hardButton = await screen.getByRole('button', { name: 'Hard' });
		await user.click(hardButton);
		expect(startGame).toBe(12);
	});
});
