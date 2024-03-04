// Preloader Component Testing Module

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
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

	it('should render a buttons with the text: "Easy", "Medium" & "Hard"', async () => {
		let startGame = 0;
		const setStartGame = (value) => { startGame += value };
		render(<Preloader startGame={startGame} setStartGame={setStartGame} />);
		const easyButton = await screen.getByRole('button', { name: 'Easy' });
		const mediumButton = await screen.getByRole('button', { name: 'Medium' });
		const hardButton = await screen.getByRole('button', { name: 'Hard' });
		expect(easyButton).toBeInTheDocument();
		expect(mediumButton).toBeInTheDocument();
		expect(hardButton).toBeInTheDocument();
	})

	it('should not call the setStartGame function when it isn`t clicked easy button', async () => {
		const setStartGame = vi.fn();
		render(<Preloader onClick={setStartGame} />);
		expect(setStartGame).not.toHaveBeenCalled();
	});

	it('should not call the setStartGame function when it isn`t clicked madium button', async () => {
		const setStartGame = vi.fn();
		render(<Preloader onClick={setStartGame} />);
		expect(setStartGame).not.toHaveBeenCalled();
	});

	it('should not call the setStartGame function when it isn`t clicked hard button', async () => {
		const setStartGame = vi.fn();
		render(<Preloader onClick={setStartGame} />);
		expect(setStartGame).not.toHaveBeenCalled();
	});
});
