// App Component Testing Module

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../components/App';

describe('App', () => {
	it('renders Preloader when startGame is 0', () => {
		render(<App />);
		const preloaderElement = screen.getByTestId('preloader');
		expect(preloaderElement).toBeInTheDocument();
	});

	it('changes startGame state when a difficulty button is clicked', () => {
		render(<App />);
		const easyButton = screen.getByText('Easy');
		fireEvent.click(easyButton);
		const headerElement = screen.getByTestId('header');
		const memoryGameElement = screen.getByTestId('memoryGame');
		expect(headerElement).toBeInTheDocument();
		expect(memoryGameElement).toBeInTheDocument();
	});
});
