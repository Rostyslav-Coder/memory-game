// Preloader Component Testing Module

import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Preloader from '../components/Preloader';

describe('Preloader', () => {
	it('changes startGame state when Easy button is clicked', async () => {
		let startGame = 0;
		const setStartGame = (value) => { startGame += value; };
		render(<Preloader startGame={startGame} setStartGame={setStartGame} />);
		const easyButton = await screen.getByText('Easy');
		await fireEvent.click(easyButton);
		expect(startGame).toBe(4);
	});

	it('changes startGame state when Medium button is clicked', async () => {
		let startGame = 0;
		const setStartGame = (value) => { startGame += value; };
		render(<Preloader startGame={startGame} setStartGame={setStartGame} />);
		const mediumButton = await screen.getByText('Medium');
		await fireEvent.click(mediumButton);
		expect(startGame).toBe(8);
	});

	it('changes startGame state when Hard button is clicked', async () => {
		let startGame = 0;
		const setStartGame = (value) => { startGame += value; };
		render(<Preloader startGame={startGame} setStartGame={setStartGame} />);
		const hardButton = await screen.getByText('Hard');
		await fireEvent.click(hardButton);
		expect(startGame).toBe(12);
	});
});
