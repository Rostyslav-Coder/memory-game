// Header Component Testing Module

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../components/Header';

describe('Header', () => {
	it('displays the count and wins', async () => {
		const count = 5;
		const wins = 2;
		render(<Header count={count} wins={wins} />);
		const countElement = await screen.getByText(`Steps Taken : ${count}`);
		const winsElement = await screen.getByText(`Consecutive wins : ${wins}`);
		expect(countElement).toBeInTheDocument();
		expect(winsElement).toBeInTheDocument();
	});
});
