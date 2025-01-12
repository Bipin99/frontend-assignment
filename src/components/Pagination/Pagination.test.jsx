import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination'; 


const onPageChange = vi.fn(); // `vi.fn()` for Vitest instead of `jest.fn()`

describe('Pagination Component', () => {
  test('renders pagination without crashing', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });

  test('disables "Previous" button on first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled();
  });

  test('disables "Next" button on last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={onPageChange} />);
    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
  });

  test('clicking "Previous" calls onPageChange with correct page', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByRole('button', { name: /previous/i }));
    expect(onPageChange).toHaveBeenCalledWith(1); 
  });

  test('clicking "Next" calls onPageChange with correct page', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(onPageChange).toHaveBeenCalledWith(3); 
  });
});
